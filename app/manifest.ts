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
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/favicon-16x16.png',
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
        name: 'Create New Lesson',
        short_name: 'New Lesson',
        description: 'Start planning a new lesson',
        url: '/create?source=shortcut',
        icons: [{ src: '/icon-new-lesson.png', sizes: '96x96' }]
      },
      {
        name: 'Browse Templates',
        short_name: 'Templates',
        description: 'Browse lesson plan templates',
        url: '/templates?source=shortcut',
        icons: [{ src: '/icon-templates.png', sizes: '96x96' }]
      }
    ]
  }
}