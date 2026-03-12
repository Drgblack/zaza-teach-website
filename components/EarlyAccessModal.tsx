'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { EarlyAccessContext, getEarlyAccessCopy } from '@/lib/teach-sales';

type Props = {
  context: EarlyAccessContext | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function EarlyAccessModal({ context, open, onOpenChange }: Props) {
  const copy = getEarlyAccessCopy(context?.locale ?? 'en');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      setName('');
      setEmail('');
      setError('');
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [open]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!context) {
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...context,
          email: email.trim(),
          name: name.trim(),
        }),
      });

      const rawBody = await response.text();
      let payload: unknown = null;

      try {
        payload = rawBody ? JSON.parse(rawBody) : null;
      } catch {
        payload = rawBody;
      }

      if (!response.ok) {
        console.error('Early access signup request failed.', {
          context,
          payload,
          status: response.status,
        });
        throw new Error('Early access request failed.');
      }

      console.info('Early access signup request accepted.', {
        context,
        payload,
      });

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'early_access_signup', {
          currency: context.currency,
          interval: context.interval,
          locale: context.locale,
          plan: context.plan,
          source: context.source || 'marketing_site',
        });
      }

      setIsSubmitted(true);
    } catch (submitError) {
      setError(copy.errorMessage);
      console.error('Failed to submit early access signup.', {
        context,
        error: submitError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{copy.title}</DialogTitle>
          <DialogDescription>{copy.description}</DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="space-y-3 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">
            <p className="font-semibold">{copy.successTitle}</p>
            <p>{copy.successBody}</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900" htmlFor="early-access-name">
                {copy.nameLabel}
              </label>
              <Input
                id="early-access-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={copy.namePlaceholder}
                autoComplete="name"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900" htmlFor="early-access-email">
                {copy.emailLabel}
              </label>
              <Input
                id="early-access-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={copy.emailPlaceholder}
                autoComplete="email"
                required
              />
            </div>

            {context ? (
              <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
                Plan: {context.plan} | Billing: {context.interval} | Currency: {context.currency}
              </p>
            ) : null}

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? copy.submittingLabel : copy.submitLabel}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
