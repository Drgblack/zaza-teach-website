import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zaza Teach - AI Lesson Planning for Educators',
    short_name: 'Zaza Teach',
    description: 'Plan lessons faster with Zaza Teach, the AI-powered tool for teachers. Create, customize, and share curriculum-aligned lessons in minutes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#66B2B2',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    dir: 'ltr',
    categories: ['education', 'productivity', 'tools'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
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
        icons: [{ src: '/favicon-32x32.png', sizes: '32x32' }]
      },
      {
        name: 'Read Blog',
        short_name: 'Blog',
        description: 'Read educational insights and tips',
        url: '/blog?source=shortcut',
        icons: [{ src: '/favicon-32x32.png', sizes: '32x32' }]
      }
    ]
  }
}