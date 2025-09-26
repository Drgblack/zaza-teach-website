import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'
import { brandAssets, brandConfig } from '@/src/config/brand'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${brandConfig.name} - ${brandConfig.tagline}`,
    short_name: brandConfig.shortName,
    description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: brandConfig.colors.primary,
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    dir: 'ltr',
    categories: ['education', 'productivity', 'tools'],
    icons: [
      {
        src: brandAssets.favicons.sizes['192x192'],
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: brandAssets.favicons.sizes['512x512'],
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: brandAssets.favicons.sizes['180x180'],
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: brandAssets.favicons.sizes['32x32'],
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: brandAssets.favicons.sizes['16x16'],
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-desktop.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Zaza Teach Desktop Interface'
      },
      {
        src: '/screenshot-mobile.png',
        sizes: '400x800',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Zaza Teach Mobile Interface'
      }
    ],
    shortcuts: [
      {
        name: 'Browse Resources',
        short_name: 'Resources',
        description: 'Browse teaching resources',
        url: '/resources?source=shortcut',
        icons: [{ src: brandAssets.favicons.sizes['32x32'], sizes: '32x32' }]
      },
      {
        name: 'Read Blog',
        short_name: 'Blog',
        description: 'Read educational insights and tips',
        url: '/blog?source=shortcut',
        icons: [{ src: brandAssets.favicons.sizes['32x32'], sizes: '32x32' }]
      }
    ]
  }
}