# Feature Request Backend Setup

This document explains how to set up the complete feature request system with Airtable storage, Brevo email notifications, and Slack integration.

## Overview

The feature request system includes:
- ✅ Modern responsive UI with German/English support
- ✅ Form validation with Zod schema
- ✅ Rate limiting (3 requests per email per 24h, 5 per IP per hour)
- ✅ Airtable storage for easy team management
- ✅ Brevo email confirmations in user's language
- ✅ Slack notifications to #feature-requests channel
- ✅ GDPR-compliant consent checkbox

## Quick Setup

### 1. Airtable Configuration

1. Create a new Airtable base or use existing
2. Create table named "Feature Requests" with these fields:
   - `Name` (Single line text)
   - `Email` (Email)
   - `Role` (Single select: Teacher, Administrator, Curriculum Coordinator, etc.)
   - `Grade/Subject` (Single line text)
   - `Feature Title` (Single line text)
   - `Priority` (Single select: Low, Medium, High)
   - `Description` (Long text)
   - `Use Case` (Long text)
   - `Current Workaround` (Long text)
   - `Locale` (Single select: en, de)
   - `Consent` (Checkbox)
   - `UTM Source` (Single line text)
   - `UTM Medium` (Single line text)
   - `UTM Campaign` (Single line text)
   - `Status` (Single select: New, In Review, Planned, In Development, Completed, Declined)
   - `Created At` (Date and time)

3. Create a view called "Triage" filtered by `Status = New`
4. Get your API key from https://airtable.com/account
5. Get your Base ID from the base URL: `https://airtable.com/appXXXXXXXXXXXXXX`

### 2. Brevo Email Setup

1. Sign up at https://brevo.com (formerly Sendinblue)
2. Go to SMTP & API → API Keys
3. Create new API key with "Send emails" permission
4. The system will automatically send confirmation emails in the user's language

### 3. Slack Integration

1. Create a #feature-requests channel in your Slack workspace
2. Go to https://api.slack.com/apps
3. Create new app → From scratch
4. Go to Incoming Webhooks → Activate → Add New Webhook
5. Select your #feature-requests channel
6. Copy the webhook URL

### 4. Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
# Required for basic functionality
AIRTABLE_API_KEY=keyXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
BREVO_API_KEY=xkeysib-XXXXXXXX

# Optional but recommended
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/XXXXX
AIRTABLE_TABLE_NAME=Feature Requests

# Optional: Bot protection
HCAPTCHA_SECRET=0xXXXXXXXXXXXXXX
```

## Features

### Form Validation
- Required fields with inline validation
- Email format checking
- Consent checkbox required for GDPR compliance
- Character limits on text fields

### Rate Limiting
- 3 submissions per email address per 24 hours
- 5 submissions per IP address per hour
- Prevents spam and abuse

### Email Templates
- Automatic language detection (EN/DE)
- Professional HTML and text versions
- Reply-to support@zazateach.com
- Privacy policy links

### Slack Notifications
Rich notifications include:
- Priority level with color coding
- Submitter details
- Feature description preview
- Direct link to Airtable record

### Error Handling
- Graceful degradation if services are unavailable
- Localized error messages
- Detailed logging for debugging

## Testing

1. **Local Development**: Forms will work but external services need configuration
2. **Validation Testing**: Try submitting invalid data to test error states
3. **Rate Limiting**: Submit multiple requests to test limits
4. **Email Testing**: Check spam folders for confirmation emails

## Data Retention & GDPR

- Consent checkbox is required before submission
- Privacy policy link included in consent text
- Auto-archive Airtable records after 18 months (configure in Airtable)
- Delete requests can be handled via support@zazateach.com

## Analytics

The system tracks successful submissions with these parameters:
- `priority`: Low/Medium/High
- `role`: Teacher role
- `locale`: en/de

Add Google Analytics tracking in the API route if needed.

## Troubleshooting

### Common Issues

1. **Form not submitting**: Check browser console for validation errors
2. **No emails received**: Verify Brevo API key and check spam folder
3. **No Slack notifications**: Check webhook URL and channel permissions
4. **Airtable errors**: Verify API key, base ID, and table name match exactly

### Debugging

Check the server logs (Vercel Functions tab) for detailed error messages. All services log their status for easy debugging.

## Production Checklist

- [ ] Airtable base created with correct field types
- [ ] Brevo account configured with API key
- [ ] Slack webhook created and tested
- [ ] Environment variables set in Vercel
- [ ] Privacy policy pages exist at `/en/privacy` and `/de/privacy`
- [ ] Test form submission end-to-end
- [ ] Verify email confirmations in both languages
- [ ] Check Slack notifications format
- [ ] Confirm rate limiting works