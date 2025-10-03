import { NextRequest, NextResponse } from 'next/server';
import { FeatureRequestSchema, saveToAirtable } from '@/lib/airtable';
import { sendFeatureConfirm } from '@/lib/email/brevo';
import { postToSlack } from '@/lib/slack';
import { rateLimit, getClientIP } from '@/lib/rate-limit';

// Error messages in multiple languages
const ERROR_MESSAGES = {
  en: {
    invalid: 'Please fill out all required fields correctly.',
    rate_limited: 'You\'ve submitted several ideas recently. Please try again tomorrow or contact support.',
    general: 'We couldn\'t send your idea right now. Please try again in a moment.',
    consent_required: 'You must agree to the privacy policy to submit your request.'
  },
  de: {
    invalid: 'Bitte füllen Sie alle Pflichtfelder korrekt aus.',
    rate_limited: 'Sie haben in letzter Zeit mehrere Ideen eingereicht. Bitte versuchen Sie es morgen erneut oder kontaktieren Sie den Support.',
    general: 'Ihre Idee konnte gerade nicht gesendet werden. Bitte versuchen Sie es später erneut.',
    consent_required: 'Sie müssen der Datenschutzerklärung zustimmen, um Ihre Anfrage zu senden.'
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request data
    const parsed = FeatureRequestSchema.safeParse(body);
    
    if (!parsed.success) {
      const locale = body.locale || 'en';
      console.error('Validation error:', parsed.error);
      
      // Check if it's a consent error specifically
      const consentError = parsed.error.issues.find(issue => 
        issue.path.includes('consent') || issue.message.includes('Consent required')
      );
      
      return NextResponse.json(
        { error: consentError ? ERROR_MESSAGES[locale].consent_required : ERROR_MESSAGES[locale].invalid },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const clientIP = getClientIP(request);
    
    // Rate limiting: 3 submissions per 24 hours per email
    const emailRateLimit = await rateLimit(`feature:email:${data.email}`, { 
      limit: 3, 
      window: '24h' 
    });
    
    // Rate limiting: 5 submissions per hour per IP
    const ipRateLimit = await rateLimit(`feature:ip:${clientIP}`, { 
      limit: 5, 
      window: '1h' 
    });

    if (!emailRateLimit.ok || !ipRateLimit.ok) {
      return NextResponse.json(
        { error: ERROR_MESSAGES[data.locale].rate_limited },
        { status: 429 }
      );
    }

    // Process the submission in parallel for better performance
    const results = await Promise.allSettled([
      saveToAirtable(data),
      sendFeatureConfirm(data),
      postToSlack(data)
    ]);

    // Check if any critical operations failed
    const airtableResult = results[0];
    const emailResult = results[1];
    
    if (airtableResult.status === 'rejected') {
      console.error('Failed to save to Airtable:', airtableResult.reason);
      // Don't fail the request if Airtable fails, but log it
    }
    
    if (emailResult.status === 'rejected') {
      console.error('Failed to send confirmation email:', emailResult.reason);
      // Don't fail the request if email fails, but log it
    }

    // Slack is non-critical, so we don't check its result

    // Log successful submission
    console.log(`Feature request submitted: ${data.feature_title} by ${data.email}`);

    // Track analytics event (you can add Google Analytics tracking here)
    // gtag('event', 'feature_request_submitted', {
    //   priority: data.priority,
    //   role: data.role,
    //   locale: data.locale
    // });

    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error) {
    console.error('Unexpected error in feature request API:', error);
    
    // Try to get locale from request body for error message
    let locale = 'en';
    try {
      const body = await request.clone().json();
      locale = body.locale || 'en';
    } catch {
      // Ignore error, use default locale
    }
    
    return NextResponse.json(
      { error: ERROR_MESSAGES[locale].general },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}