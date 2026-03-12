import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const EarlyAccessRequestSchema = z.object({
  currency: z.enum(['EUR', 'USD', 'GBP']),
  email: z.string().trim().email(),
  interval: z.enum(['monthly', 'yearly']),
  locale: z.enum(['en', 'de']),
  name: z.string().trim().min(1).max(120),
  plan: z.enum(['free', 'draft', 'teach', 'bundle']),
  source: z.string().max(100).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = EarlyAccessRequestSchema.parse(body);

    console.info('[early-access] signup received', {
      currency: data.currency,
      email: data.email,
      interval: data.interval,
      locale: data.locale,
      name: data.name,
      plan: data.plan,
      source: data.source || 'marketing_site',
    });

    return NextResponse.json({
      message: 'Early access request received.',
      ok: true,
      placeholder: true,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          details: error.flatten(),
          error: 'Invalid early access request.',
        },
        { status: 400 },
      );
    }

    console.error('[early-access] request failed', error);

    return NextResponse.json(
      {
        error: 'Unable to submit early access request.',
      },
      { status: 500 },
    );
  }
}
