# Stripe Multi-Currency Setup

Stripe is the source of truth for checkout pricing on the website. The website must resolve every paid CTA to a Stripe Price ID from [lib/pricing.ts](/c:/Users/User/zaza-teach-website/lib/pricing.ts).

## Default Website Behavior

1. Default interval: `monthly`
2. Supported currencies: `EUR`, `USD`, `GBP`
3. Checkout must use Stripe Price IDs, not product names

## Live Stripe Products And Price IDs

### Zaza Draft Pro

1. Monthly: `price_1TA6ouHXkbT25qrKoapecaPz`
2. Yearly: `price_1TA6ouHXkbT25qrKUW5KmHXr`

### Zaza Teach Pro

1. Monthly: `price_1TA6gIHXkbT25qrK5l8sKOX3`
2. Yearly: `price_1TA6gIHXkbT25qrKckEqdVd3`

### Zaza Bundle: Teach + Draft

1. Monthly: `price_1TA6mFHXkbT25qrK40mdltez`
2. Yearly: `price_1TA6mFHXkbT25qrKzZq3qTtE`

## Display Amounts

### Draft

1. Monthly: `EUR 14.99`, `USD 16.00`, `GBP 13.00`
2. Yearly: `EUR 149.00`, `USD 160.00`, `GBP 130.00`

### Teach

1. Monthly: `EUR 19.99`, `USD 22.00`, `GBP 17.00`
2. Yearly: `EUR 199.00`, `USD 220.00`, `GBP 170.00`

### Bundle

1. Monthly: `EUR 24.99`, `USD 27.00`, `GBP 22.00`
2. Yearly: `EUR 249.00`, `USD 270.00`, `GBP 220.00`

## Checkout Mapping

1. `plan=draft` resolves to `PRICING.draft[interval][currency].stripePriceId`
2. `plan=teach` resolves to `PRICING.teach[interval][currency].stripePriceId`
3. `plan=bundle` resolves to `PRICING.bundle[interval][currency].stripePriceId`
4. `plan=free` bypasses Stripe and redirects to the signup flow

## Environment

1. `STRIPE_SECRET_KEY`
2. `NEXT_PUBLIC_SITE_URL`
3. `NEXT_PUBLIC_SIGNUP_URL`
