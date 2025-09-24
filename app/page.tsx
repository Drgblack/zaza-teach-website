export default function RootPage() {
  return (
    <html>
      <body style={{ fontFamily: 'system-ui', padding: '20px' }}>
        <h1>Root Page - Debug Mode</h1>
        <p>This is the root page. Middleware is disabled for debugging.</p>
        <ul>
          <li><a href="/test">Test Page</a></li>
          <li><a href="/en">English Route</a></li>
          <li><a href="/de">German Route</a></li>
        </ul>
      </body>
    </html>
  );
}