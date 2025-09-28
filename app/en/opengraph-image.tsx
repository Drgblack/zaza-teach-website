import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Zaza Teach - AI Lesson Planning for Educators';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImageEN() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #66B2B2 0%, #8A2BE2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          Zaza Teach
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 400,
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.2,
            opacity: 0.9,
          }}
        >
          AI Lesson Planning for Educators
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 300,
            textAlign: 'center',
            maxWidth: 800,
            marginTop: 20,
            opacity: 0.8,
          }}
        >
          Create curriculum-aligned lessons in minutes
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}