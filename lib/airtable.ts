import { z } from 'zod';

const FeatureRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.string(),
  grade_subject: z.string().optional().default(''),
  feature_title: z.string().min(3),
  priority: z.enum(['Low', 'Medium', 'High']),
  description: z.string().min(10),
  use_case: z.string().min(5),
  current_workaround: z.string().optional().default(''),
  locale: z.enum(['en', 'de']).default('en'),
  consent: z.boolean().refine(Boolean, 'Consent required'),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

export type FeatureRequestData = z.infer<typeof FeatureRequestSchema>;

export async function saveToAirtable(data: FeatureRequestData): Promise<void> {
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Feature Requests';

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.warn('Airtable not configured, skipping save');
    return;
  }

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

  const record = {
    fields: {
      Name: data.name,
      Email: data.email,
      Role: data.role,
      'Grade/Subject': data.grade_subject,
      'Feature Title': data.feature_title,
      Priority: data.priority,
      Description: data.description,
      'Use Case': data.use_case,
      'Current Workaround': data.current_workaround,
      Locale: data.locale,
      Consent: data.consent,
      'UTM Source': data.utm_source || '',
      'UTM Medium': data.utm_medium || '',
      'UTM Campaign': data.utm_campaign || '',
      Status: 'New',
      'Created At': new Date().toISOString(),
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Airtable API error: ${response.status} - ${errorText}`);
    }

    console.log('Feature request saved to Airtable successfully');
  } catch (error) {
    console.error('Failed to save to Airtable:', error);
    throw error;
  }
}

export { FeatureRequestSchema };