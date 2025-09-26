# Internationalization (i18n) System

This directory contains the internationalization setup for the Zaza Teach website.

## Quick Start

### Adding a new translation

1. **Add to English file** (`messages/en.json`):
```json
{
  "mySection": {
    "title": "My Title",
    "description": "My description"
  }
}
```

2. **Add German translation** (`messages/de.json`):
```json
{
  "mySection": {
    "title": "Mein Titel", 
    "description": "Meine Beschreibung"
  }
}
```

3. **Use in component**:
```tsx
'use client';
import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('mySection');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### Testing translations

```bash
# Validate all translations
npm run check:i18n

# Build with both locales
npm run build
```

## File Structure

```
src/i18n/
├── README.md           # This file
├── config.ts          # i18n configuration
└── messages/
    ├── en.json        # English translations (base)
    └── de.json        # German translations
```

## Translation Guidelines

### English (Base Language)
- Use clear, concise language
- Keep educational terminology consistent
- Use proper punctuation and capitalization

### German Translation Rules
- **Formal address**: Always use "Sie" form
- **Educational terms**: Use standard German educational vocabulary
- **Quotation marks**: Use German quotes („text") not English ("text")
- **Compound words**: Form proper German compounds
- **School system**: Adapt to German educational context

### Key Naming Conventions

✅ **Good key names**:
```json
{
  "navigation": {
    "home": "Home",
    "pricing": "Pricing"
  },
  "pricing": {
    "plans": {
      "free": {
        "title": "Free Plan",
        "features": ["Feature 1", "Feature 2"]
      }
    }
  }
}
```

❌ **Avoid**:
```json
{
  "nav1": "Home",
  "nav2": "Pricing", 
  "price_title_free": "Free Plan"
}
```

## Current Translation Status

Run `npm run check:i18n` to see current status:

- **English**: Base language (complete)
- **German**: Comprehensive translations with cultural adaptation
- **Coverage**: 95%+ translation coverage required
- **Quality**: Native speaker reviewed German content

## Supported Features

- ✅ **Page metadata**: Title, description, keywords
- ✅ **Navigation**: All menu items and links  
- ✅ **Content sections**: Homepage, pricing, about, etc.
- ✅ **Forms**: Contact forms, newsletters
- ✅ **Error messages**: 404, validation errors
- ✅ **Blog content**: Separate blog posts per language
- ✅ **SEO**: hreflang tags and locale-specific metadata

## Common Patterns

### Conditional Text
```json
{
  "status": {
    "online": "Online",
    "offline": "Offline",
    "loading": "Loading..."
  }
}
```

### Lists and Arrays
```json
{
  "features": {
    "list": [
      "First feature",
      "Second feature", 
      "Third feature"
    ]
  }
}
```

### Pluralization
```json
{
  "items": {
    "zero": "No items",
    "one": "One item", 
    "other": "{count} items"
  }
}
```

### With Variables
```json
{
  "welcome": "Welcome back, {name}!",
  "lastLogin": "Last login: {date}"
}
```

## Maintenance

### Adding New Pages

When creating new pages, always:

1. Plan translation keys first
2. Add English translations to en.json
3. Add German translations to de.json  
4. Create both `/en/page` and `/de/page` routes
5. Test both locales
6. Run i18n validation

### Translation Updates

When updating existing translations:

1. Update English first (source of truth)
2. Update German to match
3. Test affected pages in both languages
4. Run validation script
5. Check for broken translations

### Code Review Checklist

- [ ] Both en.json and de.json updated
- [ ] German translations are culturally appropriate
- [ ] No hardcoded text in components
- [ ] Both locale routes work correctly
- [ ] SEO metadata includes correct locale
- [ ] `npm run check:i18n` passes

## Troubleshooting

### Translation key not found
```
Error: Translation key 'myKey' not found
```
**Solution**: Add the key to both en.json and de.json

### Build fails with translation error
```
Error during prerendering page "/de/my-page"
```  
**Solution**: Add `export const dynamic = 'force-dynamic'` to the page

### German content shows English
**Check**:
1. Translation key exists in de.json
2. Page is marked as dynamic if needed
3. Component uses correct translation namespace

### SEO/hreflang issues
**Check**:
1. HrefLangLinks component in layout
2. generateSEOMetadata has correct locale
3. Meta tags appear in page source

## Performance Considerations

- **Static pages**: English pages can be statically generated
- **Dynamic pages**: German pages using translations are server-rendered
- **Bundle size**: Translation files are loaded per-locale
- **Caching**: Translation files cached at build time

## Development Commands

```bash
# Validate translations
npm run check:i18n

# Type check
npm run typecheck  

# Build with both locales
npm run build

# Development server
npm run dev
```

## Related Files

- `lib/seo.ts` - SEO utilities with hreflang
- `lib/blog-locale.ts` - Blog content per locale
- `components/LocaleProvider.tsx` - Translation context
- `app/[locale]/layout.tsx` - Locale-specific layouts
- `docs/i18n.md` - Comprehensive documentation

For detailed information, see the full [i18n documentation](../../docs/i18n.md).