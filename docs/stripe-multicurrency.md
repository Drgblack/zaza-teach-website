# Stripe Multi-Currency Setup

This marketing site uses Stripe Price objects directly. Do not convert currencies in the frontend or backend.

## Products

Create these Stripe products:

1. `Zaza Teach Pro`
2. `Zaza Teach Bundle`

## Prices

Create a separate recurring monthly Price for each product and currency.

### Zaza Teach Pro

1. `EUR` at `19.99`
2. `USD` at `19.99`
3. `GBP` at `17.99`

### Zaza Teach Bundle

1. `EUR` at `24.99`
2. `USD` at `24.99`
3. `GBP` at `21.99`

## App Config Mapping

After the Price objects are created, replace the placeholder IDs in [lib/pricing.ts](/c:/Users/User/zaza-teach-website/lib/pricing.ts).

Expected mapping:

1. `price_pro_eur`
2. `price_pro_usd`
3. `price_pro_gbp`
4. `price_bundle_eur`
5. `price_bundle_usd`
6. `price_bundle_gbp`

## Environment

Set these variables in deployment:

1. `STRIPE_SECRET_KEY`
2. `NEXT_PUBLIC_SITE_URL`
3. `NEXT_PUBLIC_SIGNUP_URL`

## Checkout Behavior

1. Free plan requests still resolve to the signup URL and carry `plan`, `currency`, and `locale`.
2. Paid plans use `/api/create-checkout-session`.
3. The API selects the Stripe Price ID from [lib/pricing.ts](/c:/Users/User/zaza-teach-website/lib/pricing.ts) using the submitted `plan` and `currency`.
4. Stripe Checkout must always show the same currency displayed in the UI.
