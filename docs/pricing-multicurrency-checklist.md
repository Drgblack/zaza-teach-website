# Pricing Multi-Currency QA Checklist

## Pricing UI

1. Load `/en/pricing` with a clean browser profile and confirm the selector defaults from browser locale or falls back to `EUR`.
2. Switch between `EUR`, `USD`, and `GBP` and confirm prices update instantly on the pricing page.
3. Confirm the billing interval toggle defaults to `monthly`.
4. Switch from `monthly` to `yearly` and confirm the Teach and Bundle cards match the Stripe amounts in [lib/pricing.ts](/c:/Users/User/zaza-teach-website/lib/pricing.ts).
5. Refresh the page and confirm the selected currency persists from `localStorage`.
6. Visit the homepage after changing currency on the pricing page and confirm the pricing section reflects the same currency.
7. Confirm formatting is locale-appropriate:
   `en` pages should render values like `€19.99`, `$19.99`, `£17.99`.
   `de` pages should render locale-formatted currency values such as `19,99 €`.

## Checkout

1. Click `Start Free` and confirm the redirect includes `plan=free` and the selected `currency`.
2. Click `Reclaim your time every week` and confirm `/api/create-checkout-session` receives `plan=teach`, `interval=monthly`, and the selected `currency`.
3. Click `Teach & write smarter` and confirm `/api/create-checkout-session` receives `plan=bundle`, `interval=monthly`, and the selected `currency`.
4. Change the interval to `yearly` on the pricing page and confirm the paid CTA sends `interval=yearly`.
5. Confirm Stripe Checkout shows the same currency and interval as the pricing card.
6. Confirm the Stripe Dashboard records the correct Price and currency for each completed test checkout.

## Regional Smoke Tests

1. UK browser locale should default to `GBP`.
2. US browser locale should default to `USD`.
3. EU browser locale should default to `EUR`.
4. Switching currency manually should override browser detection on subsequent visits.
