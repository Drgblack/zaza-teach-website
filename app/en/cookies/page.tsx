import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Cookie Policy | Zaza Teach",
  description: "How Zaza Teach uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <PageShell title="Cookie Policy">
      <p><em>Last updated: September 22, 2025</em></p>

      <h2>Overview</h2>
      <p>
        Learn about how we use cookies and similar technologies to improve your experience, ensure
        security, and provide our educational services effectively.
      </p>

      <h2>What Are Cookies</h2>
      <p>
        Cookies are small text files that websites place on your device. They help websites
        remember your preferences and settings to enhance your experience.
      </p>

      <h2>Required for basic website functionality, security, and user authentication</h2>
      <h3>Essential</h3>
      <p>These cookies are necessary for our website to function properly. They are:</p>
      <ul>
        <li>Authentication: User login sessions, secure token</li>
        <li>Security: CSRF protection</li>
        <li>Load Balancing: Directing traffic to appropriate servers</li>
        <li>Preferences: Language settings, accessibility options</li>
      </ul>

      <h2>Help us understand how visitors interact with our website to improve user experience</h2>
      <h3>Analytics</h3>
      <p>These cookies help us understand how our website is being used. Examples:</p>
      <ul>
        <li>Page views and popular content</li>
        <li>User journey and navigation patterns</li>
        <li>Error tracking for technical improvements</li>
        <li>Performance monitoring</li>
        <li>A/B testing for user experience improvements</li>
      </ul>

      <h2>Monitor site performance and identify areas for improvement</h2>
      <h3>Performance</h3>
      <p>These cookies collect information about website performance. They measure:</p>
      <ul>
        <li>Page load times</li>
        <li>Server response times</li>
        <li>Resource loading performance</li>
        <li>Error rates and technical issues</li>
      </ul>

      <h2>Similar Technologies</h2>
      <p>
        In addition to cookies, we may use other technologies including:
      </p>
      <ul>
        <li><strong>Local Storage:</strong> For offline capabilities and user preferences</li>
        <li><strong>Session Storage:</strong> For temporary data during your session</li>
        <li><strong>Web Beacons:</strong> Small tracking pixels for analytics</li>
        <li><strong>Fingerprinting:</strong> Device identification for security purposes</li>
      </ul>

      <h2>Cookie Management</h2>
      <p>
        You can control cookies through your browser settings. However, disabling essential cookies
        may affect website functionality.
      </p>

      <h3>Browser Controls</h3>
      <ul>
        <li>Chrome: Settings → Privacy and Security → Cookies</li>
        <li>Firefox: Settings → Privacy & Security → Cookies</li>
        <li>Safari: Preferences → Privacy → Cookies</li>
        <li>Edge: Settings → Cookies and site permissions</li>
      </ul>

      <h3>Our Cookie Preferences</h3>
      <p>
        We provide cookie preference controls in our application where you can:
      </p>
      <ul>
        <li>Accept or decline optional cookies</li>
        <li>Change your preferences at any time</li>
        <li>View detailed information about each cookie type</li>
      </ul>

      <h2>Third-Party Cookies</h2>
      <p>Some cookies may be set by third-party services we use:</p>
      <ul>
        <li><strong>Google Analytics:</strong> Website traffic analysis</li>
        <li><strong>Authentication Providers:</strong> Social login services</li>
        <li><strong>CDN Services:</strong> Content delivery optimization</li>
        <li><strong>Support Tools:</strong> Customer service functionality</li>
      </ul>

      <h2>Cookie Categories We Use</h2>
      <h3>Session Cookies</h3>
      <p>
        These are temporary and deleted when you close your browser.
        They're essential for login sessions and security.
      </p>

      <h3>Persistent Cookies</h3>
      <p>
        These remain on your device for a set period or until manually deleted.
        They remember your preferences between visits.
      </p>

      <h3>First-Party Cookies</h3>
      <p>Set directly by Zaza Teach for our website functionality.</p>

      <h3>Third-Party Cookies</h3>
      <p>Set by external services we integrate with for enhanced functionality.</p>

      <h2>Data Retention</h2>
      <p>Different cookies have different lifespans:</p>
      <ul>
        <li>Session cookies: Deleted when browser closes</li>
        <li>Authentication cookies: 30 days (or until logout)</li>
        <li>Preference cookies: 1 year</li>
        <li>Analytics cookies: 2 years</li>
      </ul>

      <h2>International Considerations</h2>
      <p>
        We comply with cookie laws in different jurisdictions:
      </p>
      <ul>
        <li>EU GDPR: Explicit consent for non-essential cookies</li>
        <li>UK PECR: Cookie consent requirements</li>
        <li>California CCPA: Consumer privacy rights</li>
      </ul>

      <h2>Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy to reflect changes in our practices or applicable laws.
        We will notify users of significant changes.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about our use of cookies, contact us at:
      </p>
      <ul>
        <li>Email: <a href="mailto:support@zazateach.com">support@zazateach.com</a></li>
        <li>Address: Gumbertstraße 150, 40229 Düsseldorf, Deutschland</li>
      </ul>
    </PageShell>
  );
}