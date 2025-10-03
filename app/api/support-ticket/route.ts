import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';
import { sendEmail } from '@/lib/email/brevo';
import { sendSlackNotification } from '@/lib/slack';

// Zod schema for validation
const SupportTicketSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  role: z.string().min(1).max(100),
  school: z.string().max(100).optional(),
  topic: z.string().min(1).max(100),
  priority: z.string().min(1).max(20),
  message: z.string().min(10).max(2000),
  consent: z.boolean().refine(val => val === true, {
    message: 'Consent is required'
  }),
  marketing_opt_in: z.boolean().optional().default(false),
  locale: z.enum(['en', 'de']).default('en')
});

type SupportTicketData = z.infer<typeof SupportTicketSchema>;

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const data = SupportTicketSchema.parse(body);

    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    // Rate limiting: 3 per email per 24h, 5 per IP per hour
    const [emailLimit, ipLimit] = await Promise.all([
      rateLimit(`support_email:${data.email}`, { 
        requests: 3, 
        window: 24 * 60 * 60 * 1000 // 24 hours
      }),
      rateLimit(`support_ip:${clientIP}`, { 
        requests: 5, 
        window: 60 * 60 * 1000 // 1 hour
      })
    ]);

    if (!emailLimit.success) {
      return NextResponse.json(
        { 
          error: data.locale === 'de' 
            ? 'Zu viele Anfragen von dieser E-Mail-Adresse. Bitte versuchen Sie es später erneut.'
            : 'Too many requests from this email address. Please try again later.'
        },
        { status: 429 }
      );
    }

    if (!ipLimit.success) {
      return NextResponse.json(
        { 
          error: data.locale === 'de'
            ? 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.'
            : 'Too many requests. Please try again later.'
        },
        { status: 429 }
      );
    }

    // Store in Airtable (if configured)
    let airtableRecord = null;
    if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
      try {
        airtableRecord = await createAirtableRecord(data);
      } catch (error) {
        console.error('Airtable storage failed:', error);
        // Continue execution - don't fail the entire request
      }
    }

    // Send confirmation email (if Brevo configured)
    if (process.env.BREVO_API_KEY) {
      try {
        await sendSupportConfirmationEmail(data);
      } catch (error) {
        console.error('Email sending failed:', error);
        // Continue execution - don't fail the entire request
      }
    }

    // Send Slack notification (if webhook configured)
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        await sendSupportSlackNotification(data, airtableRecord?.id);
      } catch (error) {
        console.error('Slack notification failed:', error);
        // Continue execution - don't fail the entire request
      }
    }

    return NextResponse.json({ 
      success: true,
      message: data.locale === 'de' 
        ? 'Support-Ticket erfolgreich erstellt'
        : 'Support ticket created successfully'
    });

  } catch (error) {
    console.error('Support ticket submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        error: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

async function createAirtableRecord(data: SupportTicketData) {
  const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_SUPPORT_TABLE_NAME || 'Support Tickets'}`;
  
  const response = await fetch(airtableUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        'Name': data.name,
        'Email': data.email,
        'Role': data.role,
        'School': data.school || '',
        'Topic': data.topic,
        'Priority': data.priority,
        'Message': data.message,
        'Locale': data.locale,
        'Consent': data.consent,
        'Marketing Opt-in': data.marketing_opt_in || false,
        'Status': 'New',
        'Created At': new Date().toISOString()
      }
    })
  });

  if (!response.ok) {
    throw new Error(`Airtable API error: ${response.status}`);
  }

  return await response.json();
}

async function sendSupportConfirmationEmail(data: SupportTicketData) {
  const template = getSupportEmailTemplate(data);
  
  await sendEmail({
    to: [{ email: data.email, name: data.name }],
    subject: template.subject,
    htmlContent: template.html,
    textContent: template.text,
    replyTo: { email: 'support@zazateach.com', name: 'Zaza Teach Support' }
  });
}

function getSupportEmailTemplate(data: SupportTicketData) {
  if (data.locale === 'de') {
    return {
      subject: `Support-Ticket erhalten: ${data.topic}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Vielen Dank für Ihre Support-Anfrage</h2>
          <p>Hallo ${data.name},</p>
          <p>wir haben Ihre Support-Anfrage erhalten und werden sie innerhalb von 24 Stunden bearbeiten.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Ihre Anfrage:</h3>
            <p><strong>Thema:</strong> ${data.topic}</p>
            <p><strong>Priorität:</strong> ${data.priority}</p>
            <p><strong>Nachricht:</strong></p>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <p>Falls Sie weitere Fragen haben, antworten Sie einfach auf diese E-Mail.</p>
          
          <p>Mit freundlichen Grüßen,<br>
          Das Zaza Teach Support-Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #6b7280;">
            Diese E-Mail wurde automatisch generiert. Weitere Informationen finden Sie in unserer 
            <a href="https://zazateach.com/de/privacy" style="color: #7c3aed;">Datenschutzerklärung</a>.
          </p>
        </div>
      `,
      text: `
Vielen Dank für Ihre Support-Anfrage

Hallo ${data.name},

wir haben Ihre Support-Anfrage erhalten und werden sie innerhalb von 24 Stunden bearbeiten.

Ihre Anfrage:
Thema: ${data.topic}
Priorität: ${data.priority}
Nachricht: ${data.message}

Falls Sie weitere Fragen haben, antworten Sie einfach auf diese E-Mail.

Mit freundlichen Grüßen,
Das Zaza Teach Support-Team

Diese E-Mail wurde automatisch generiert. Weitere Informationen finden Sie in unserer Datenschutzerklärung: https://zazateach.com/de/privacy
      `
    };
  }

  return {
    subject: `Support ticket received: ${data.topic}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c3aed;">Thanks for your support request</h2>
        <p>Hi ${data.name},</p>
        <p>We've received your support request and will get back to you within 24 hours.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #374151;">Your request:</h3>
          <p><strong>Topic:</strong> ${data.topic}</p>
          <p><strong>Priority:</strong> ${data.priority}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        
        <p>If you have any additional questions, simply reply to this email.</p>
        
        <p>Best regards,<br>
        The Zaza Teach Support Team</p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 12px; color: #6b7280;">
          This email was generated automatically. For more information, see our 
          <a href="https://zazateach.com/en/privacy" style="color: #7c3aed;">Privacy Policy</a>.
        </p>
      </div>
    `,
    text: `
Thanks for your support request

Hi ${data.name},

We've received your support request and will get back to you within 24 hours.

Your request:
Topic: ${data.topic}
Priority: ${data.priority}
Message: ${data.message}

If you have any additional questions, simply reply to this email.

Best regards,
The Zaza Teach Support Team

This email was generated automatically. For more information, see our Privacy Policy: https://zazateach.com/en/privacy
    `
  };
}

async function sendSupportSlackNotification(data: SupportTicketData, airtableRecordId?: string) {
  const priorityColors = {
    'High': '#ef4444',
    'Hoch': '#ef4444',
    'Normal': '#f59e0b',
    'Low': '#10b981',
    'Niedrig': '#10b981'
  };

  const color = priorityColors[data.priority as keyof typeof priorityColors] || '#6b7280';
  
  const airtableLink = airtableRecordId && process.env.AIRTABLE_BASE_ID 
    ? `\n<https://airtable.com/${process.env.AIRTABLE_BASE_ID}/${airtableRecordId}|View in Airtable>`
    : '';

  const message = {
    text: `New support ticket from ${data.name}`,
    attachments: [
      {
        color: color,
        fields: [
          {
            title: 'Contact',
            value: `${data.name} (${data.email})`,
            short: true
          },
          {
            title: 'Role & School',
            value: `${data.role}${data.school ? ` at ${data.school}` : ''}`,
            short: true
          },
          {
            title: 'Topic',
            value: data.topic,
            short: true
          },
          {
            title: 'Priority',
            value: data.priority,
            short: true
          },
          {
            title: 'Message',
            value: data.message.length > 200 
              ? data.message.substring(0, 200) + '...' 
              : data.message,
            short: false
          }
        ],
        footer: `Zaza Teach Support${airtableLink}`,
        ts: Math.floor(Date.now() / 1000)
      }
    ]
  };

  await sendSlackNotification(message);
}