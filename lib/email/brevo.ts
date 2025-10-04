import { FeatureRequestData } from '../airtable';

interface EmailTemplate {
  subject: string;
  htmlContent: string;
  textContent: string;
}

function getEmailTemplate(data: FeatureRequestData): EmailTemplate {
  if (data.locale === 'de') {
    return {
      subject: 'Vielen Dank für Ihre Idee – wir prüfen sie innerhalb von 48 Stunden',
      htmlContent: `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
                <h1 style="margin: 0; font-size: 24px;">Vielen Dank für Ihre Idee!</h1>
              </div>
              
              <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
                <p>Hallo ${data.name},</p>
                <p>vielen Dank für Ihren Feature-Vorschlag "<strong>${data.feature_title}</strong>". Wir schätzen es sehr, dass Sie sich die Zeit genommen haben, uns Ihre Idee mitzuteilen.</p>
                <p>Unser Team wird Ihren Vorschlag innerhalb der nächsten 48 Stunden prüfen und Sie über die nächsten Schritte informieren.</p>
              </div>
              
              <div style="border-left: 4px solid #667eea; padding-left: 20px; margin: 25px 0;">
                <h3>Ihre Anfrage im Überblick:</h3>
                <p><strong>Feature:</strong> ${data.feature_title}</p>
                <p><strong>Priorität:</strong> ${data.priority}</p>
                <p><strong>Rolle:</strong> ${data.role}</p>
              </div>
              
              <p>Falls Sie Fragen haben, können Sie gerne auf diese E-Mail antworten oder sich direkt an support@zazateach.com wenden.</p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #666;">
                <p>Mit freundlichen Grüßen,<br>Das Zaza Teach Team</p>
                <p><a href="https://zazateach.com/de/privacy" style="color: #667eea;">Datenschutzerklärung</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
      textContent: `
Vielen Dank für Ihre Idee!

Hallo ${data.name},

vielen Dank für Ihren Feature-Vorschlag "${data.feature_title}". Wir schätzen es sehr, dass Sie sich die Zeit genommen haben, uns Ihre Idee mitzuteilen.

Unser Team wird Ihren Vorschlag innerhalb der nächsten 48 Stunden prüfen und Sie über die nächsten Schritte informieren.

Ihre Anfrage im Überblick:
- Feature: ${data.feature_title}
- Priorität: ${data.priority}
- Rolle: ${data.role}

Falls Sie Fragen haben, können Sie gerne auf diese E-Mail antworten oder sich direkt an support@zazateach.com wenden.

Mit freundlichen Grüßen,
Das Zaza Teach Team

Datenschutzerklärung: https://zazateach.com/de/privacy
      `
    };
  }

  // English template
  return {
    subject: 'Thanks for your idea. We\'ll review it within 48 hours',
    htmlContent: `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
              <h1 style="margin: 0; font-size: 24px;">Thanks for your idea!</h1>
            </div>
            
            <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
              <p>Hi ${data.name},</p>
              <p>Thank you for submitting your feature request for "<strong>${data.feature_title}</strong>". We really appreciate you taking the time to share your idea with us.</p>
              <p>Our team will review your suggestion within the next 48 hours and get back to you about next steps.</p>
            </div>
            
            <div style="border-left: 4px solid #667eea; padding-left: 20px; margin: 25px 0;">
              <h3>Your request summary:</h3>
              <p><strong>Feature:</strong> ${data.feature_title}</p>
              <p><strong>Priority:</strong> ${data.priority}</p>
              <p><strong>Role:</strong> ${data.role}</p>
            </div>
            
            <p>If you have any questions, feel free to reply to this email or contact us directly at support@zazateach.com.</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #666;">
              <p>Best regards,<br>The Zaza Teach Team</p>
              <p><a href="https://zazateach.com/en/privacy" style="color: #667eea;">Privacy Policy</a></p>
            </div>
          </div>
        </body>
      </html>
    `,
    textContent: `
Thanks for your idea!

Hi ${data.name},

Thank you for submitting your feature request for "${data.feature_title}". We really appreciate you taking the time to share your idea with us.

Our team will review your suggestion within the next 48 hours and get back to you about next steps.

Your request summary:
- Feature: ${data.feature_title}
- Priority: ${data.priority}
- Role: ${data.role}

If you have any questions, feel free to reply to this email or contact us directly at support@zazateach.com.

Best regards,
The Zaza Teach Team

Privacy Policy: https://zazateach.com/en/privacy
    `
  };
}

export async function sendFeatureConfirm(data: FeatureRequestData): Promise<void> {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    console.warn('Brevo not configured, skipping email');
    return;
  }

  const template = getEmailTemplate(data);

  const emailData = {
    sender: {
      name: 'Zaza Teach',
      email: 'support@zazateach.com'
    },
    to: [
      {
        email: data.email,
        name: data.name
      }
    ],
    subject: template.subject,
    htmlContent: template.htmlContent,
    textContent: template.textContent,
    replyTo: {
      email: 'support@zazateach.com',
      name: 'Zaza Teach Support'
    }
  };

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Api-Key': BREVO_API_KEY
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Brevo API error: ${response.status} - ${errorText}`);
    }

    console.log('Confirmation email sent successfully');
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    throw error;
  }
}