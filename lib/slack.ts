import { FeatureRequestData } from './airtable';

export async function postToSlack(data: FeatureRequestData): Promise<void> {
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

  if (!SLACK_WEBHOOK_URL) {
    console.warn('Slack webhook not configured, skipping notification');
    return;
  }

  const priorityEmoji = {
    'Low': '🟢',
    'Medium': '🟡',
    'High': '🔴'
  };

  const emoji = priorityEmoji[data.priority] || '⚪';
  
  // Create Airtable record link (requires Base ID and Table ID)
  const airtableLink = process.env.AIRTABLE_BASE_ID ? 
    `https://airtable.com/${process.env.AIRTABLE_BASE_ID}` : 
    'Airtable (configure link)';

  const message = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `${emoji} New Feature Request (${data.priority})`
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Feature:*\n${data.feature_title}`
          },
          {
            type: 'mrkdwn',
            text: `*Priority:*\n${data.priority}`
          },
          {
            type: 'mrkdwn',
            text: `*Submitted by:*\n${data.name} (${data.email})`
          },
          {
            type: 'mrkdwn',
            text: `*Role:*\n${data.role}${data.grade_subject ? ` - ${data.grade_subject}` : ''}`
          }
        ]
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Description:*\n${data.description.substring(0, 200)}${data.description.length > 200 ? '...' : ''}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Use Case:*\n${data.use_case.substring(0, 200)}${data.use_case.length > 200 ? '...' : ''}`
        }
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'View in Airtable'
            },
            url: airtableLink,
            style: 'primary'
          }
        ]
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `Locale: ${data.locale.toUpperCase()} | Submitted: ${new Date().toLocaleString()}`
          }
        ]
      }
    ]
  };

  try {
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`Slack webhook error: ${response.status}`);
    }

    console.log('Slack notification sent successfully');
  } catch (error) {
    console.error('Failed to send Slack notification:', error);
    // Don't throw error for Slack failures, it's non-critical
  }
}