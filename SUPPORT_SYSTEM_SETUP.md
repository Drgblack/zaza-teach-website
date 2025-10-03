# Support System Backend Setup

This document explains how to set up the complete support ticket system with Airtable storage, Brevo email notifications, and Slack integration.

## Overview

The support system includes:
- ✅ Modern responsive UI with German/English support
- ✅ Inline contact form with accordion behavior
- ✅ Form validation with Zod schema
- ✅ Rate limiting (3 requests per email per 24h, 5 per IP per hour)
- ✅ Airtable storage for support ticket management
- ✅ Brevo email confirmations in user's language
- ✅ Slack notifications to support channel
- ✅ GDPR-compliant consent checkbox
- ✅ FAQ search functionality
- ✅ Six support category tiles including System Status and Data & Privacy

## Quick Setup

### 1. Airtable Configuration

1. Create a new Airtable base or use existing
2. Create table named "Support Tickets" with these fields:
   - `Name` (Single line text)
   - `Email` (Email)
   - `Role` (Single select: Grundschullehrer/in, Weiterführende/r Lehrer/in, etc.)
   - `School` (Single line text)
   - `Topic` (Single select: Account & Billing, Technical Issue, Lesson Planning Help, Feature Request, Data & Privacy)
   - `Priority` (Single select: Low/Niedrig, Normal, High/Hoch)
   - `Message` (Long text)
   - `Locale` (Single select: en, de)
   - `Consent` (Checkbox)
   - `Status` (Single select: New, In Progress, Waiting for User, Resolved, Closed)
   - `Created At` (Date and time)
   - `Assigned To` (Single line text - for team member assignment)
   - `Internal Notes` (Long text - for team communication)

3. Create views:
   - "New Tickets" filtered by `Status = New`
   - "In Progress" filtered by `Status = In Progress`
   - "High Priority" filtered by `Priority = High` or `Priority = Hoch`
   - "This Week" filtered by `Created At` within last 7 days

4. Get your API key from https://airtable.com/account
5. Get your Base ID from the base URL: `https://airtable.com/appXXXXXXXXXXXXXX`

### 2. Brevo Email Setup

1. Sign up at https://brevo.com (formerly Sendinblue)
2. Go to SMTP & API → API Keys
3. Create new API key with "Send emails" permission
4. The system will automatically send confirmation emails in the user's language

### 3. Slack Integration

1. Create a #support or #support-tickets channel in your Slack workspace
2. Go to https://api.slack.com/apps
3. Create new app → From scratch
4. Go to Incoming Webhooks → Activate → Add New Webhook
5. Select your support channel
6. Copy the webhook URL

### 4. Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
# Required for basic functionality
AIRTABLE_API_KEY=keyXXXXXXXXXXXXXX
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_SUPPORT_TABLE_NAME=Support Tickets
BREVO_API_KEY=xkeysib-XXXXXXXX

# Optional but recommended
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/XXXXX

# Feature Request System (if using both)
AIRTABLE_TABLE_NAME=Feature Requests

# Optional: Bot protection
HCAPTCHA_SECRET=0xXXXXXXXXXXXXXX
```

## Features

### Support Page UI Components

1. **Hero Section**
   - "Support Center" title
   - "Get help fast from real humans. Most emails answered within 24 hours."

2. **Three-Button Action Bar**
   - Contact Support (primary) - toggles inline form
   - Live Chat (outline) - disabled until chat system configured
   - Browse all FAQs (ghost) - links to /faqs

3. **Inline Contact Form** (accordion behavior)
   - Two-column layout for Name/Email and Role/School
   - Topic dropdown with "Feature Request" option linking to feature page
   - Priority/Severity selection
   - GDPR consent checkbox

4. **Six Support Category Tiles**
   - Getting Started
   - Lesson Planning  
   - Technical Help
   - Account & Billing
   - System Status (links to status.zazateach.com)
   - Data & Privacy

5. **FAQ Section with Search**
   - Search input with icon
   - Filter functionality
   - "View All FAQs" link

6. **Support Hours Panel**
   - Email: 24/7 intake, replies within 24 hours
   - Live Chat: Monday-Friday, 9 AM-6 PM

### Form Validation
- Required fields with inline validation
- Email format checking
- Consent checkbox required for GDPR compliance
- Character limits on text fields
- Priority-based categorization

### Rate Limiting
- 3 submissions per email address per 24 hours
- 5 submissions per IP address per hour
- Prevents spam and abuse
- Localized error messages

### Email Templates
- Automatic language detection (EN/DE)
- Professional HTML and text versions
- Reply-to support@zazateach.com
- Privacy policy links
- Ticket summary included

### Slack Notifications
Rich notifications include:
- Priority level with color coding (High=red, Normal=orange, Low=green)
- Contact details and role
- Topic and priority
- Message preview (200 chars)
- Direct link to Airtable record

### Error Handling
- Graceful degradation if services are unavailable
- Localized error messages (EN/DE)
- Detailed logging for debugging
- Non-blocking failures (continues if one service fails)

## Testing

1. **Local Development**: Forms will work but external services need configuration
2. **Validation Testing**: Try submitting invalid data to test error states
3. **Rate Limiting**: Submit multiple requests to test limits
4. **Email Testing**: Check spam folders for confirmation emails
5. **Slack Testing**: Verify notifications appear in correct channel

## Data Retention & GDPR

- Consent checkbox is required before submission
- Privacy policy link included in consent text (/en/privacy, /de/privacy)
- Auto-archive Airtable records after resolution (configure retention in Airtable)
- Delete requests can be handled via support@zazateach.com
- All data processing logged for audit trail

## Support Workflow

### Recommended Team Process

1. **New tickets** arrive in Airtable "New Tickets" view
2. **Slack notifications** alert team immediately
3. **Triage** tickets by priority and assign team member
4. **Status updates** tracked in Airtable
5. **Internal notes** for team communication
6. **Email responses** sent directly from support@zazateach.com

### Response Time Targets

- **High Priority**: 4 hours
- **Normal Priority**: 24 hours  
- **Low Priority**: 48 hours

## Analytics

The system tracks successful submissions with these parameters:
- `priority`: Low/Normal/High
- `topic`: Account & Billing, Technical Issue, etc.
- `role`: Teacher role
- `locale`: en/de

Add Google Analytics tracking in the API route if needed.

## Troubleshooting

### Common Issues

1. **Form not submitting**: Check browser console for validation errors
2. **No emails received**: Verify Brevo API key and check spam folder
3. **No Slack notifications**: Check webhook URL and channel permissions
4. **Airtable errors**: Verify API key, base ID, and table name match exactly
5. **German text issues**: Ensure all files saved as UTF-8

### Debugging

Check the server logs (Vercel Functions tab) for detailed error messages. All services log their status for easy debugging.

## Production Checklist

- [ ] Airtable base created with correct field types and views
- [ ] Brevo account configured with API key
- [ ] Slack webhook created and tested
- [ ] Environment variables set in Vercel
- [ ] Privacy policy pages exist at `/en/privacy` and `/de/privacy`
- [ ] Test form submission end-to-end
- [ ] Verify email confirmations in both languages
- [ ] Check Slack notifications format and channel
- [ ] Confirm rate limiting works
- [ ] Test FAQ search functionality
- [ ] Verify all support category links work
- [ ] Check responsive design on mobile/tablet
- [ ] Test accordion behavior of contact form

## Integration with Feature Request System

The support system is designed to work alongside the existing feature request system:

- Shared Airtable base but separate tables
- Same rate limiting infrastructure
- Same Brevo email service
- Same Slack workspace (different channels recommended)
- Cross-linking: Support form includes "Feature Request" topic that can direct users to /feature-request page

This creates a unified customer support ecosystem while maintaining separation of concerns.