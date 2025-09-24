import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Zaza Teach",
  description: "How Zaza Teach collects, uses, and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy">
      <p><em>Last updated: September 22, 2025</em></p>

      <h2>Overview</h2>
      <p>
        Your privacy is our priority. Learn how we protect your personal information and ensure
        better data security in compliance with global privacy regulations.
      </p>

      <h2>Account Information</h2>
      <p>
        When you create an account, we collect your name, email address, school/organization name, and role
        to provide you access to our educational tools and services.
      </p>

      <h2>Usage Data</h2>
      <p>
        We collect information about how you use our service, including features used, time spent, and
        usage patterns to improve our product and user experience.
      </p>

      <h2>Student Data Protected</h2>
      <p>
        We take extreme care with any student information that may be uploaded. No student personal
      information is shared, sold, or used for any purpose other than the educational services
      you've consented to.
      </p>

      <h2>Communication</h2>
      <p>
        We use your contact information to send product updates, support responses, and service-related
        communications. You can opt out of marketing communications at any time.
      </p>

      <h2>Data Storage and Security</h2>
      <ul>
        <li>All data is encrypted in transit and at rest</li>
        <li>We use industry-standard security measures to protect your information</li>
        <li>Access to your data is strictly limited to authorized personnel</li>
        <li>Regular security audits and monitoring ensure ongoing protection</li>
      </ul>

      <h2>Cookies and Tracking</h2>
      <p>
        We use essential cookies for authentication, session management, and site functionality.
        Optional analytics cookies help us understand usage patterns to improve our service.
      </p>

      <h2>Third-Party Integrations</h2>
      <p>
        When you connect third-party services (like Google Classroom), we only access data necessary
        for the integration to function. We do not store unnecessary data from these services.
      </p>

      <h2>Data Retention</h2>
      <ul>
        <li>Account data: Retained while your account is active</li>
        <li>Usage analytics: Aggregated data retained for product improvement</li>
        <li>Support communications: Retained for customer service purposes</li>
        <li>Deleted accounts: Data removed within 30 days of account deletion</li>
      </ul>

      <h2>Your Rights</h2>
      <p>
        Under GDPR and other privacy regulations, you have the following rights:
      </p>
      <ul>
        <li><strong>Right to Access:</strong> Receive a copy of your personal data</li>
        <li><strong>Right to Rectification:</strong> Correct inaccurate personal data</li>
        <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
        <li><strong>Right to Portability:</strong> Export your data in machine-readable format</li>
        <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
        <li><strong>Right to Restrict:</strong> Request restriction of processing</li>
      </ul>

      <h2>International Data Transfers</h2>
      <p>
        Your data may be processed outside the EU/UK if necessary for service delivery. We ensure
        appropriate safeguards are in place for international transfers.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Our services are designed for use by educators. We do not knowingly collect personal
        information from children under 13 without appropriate consent and safeguards.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this privacy policy to reflect changes in our practices, technology, or
        legal requirements. We will notify users of significant changes.
      </p>

      <h2>Contact Us</h2>
      <p>
        For privacy-related questions or to exercise your rights, contact us at:
      </p>
      <ul>
        <li>Email: <a href="mailto:support@zazateach.com">support@zazateach.com</a></li>
        <li>Address: Gumbertstraße 150, 40229 Düsseldorf, Deutschland</li>
      </ul>

      <h2>Data Controller</h2>
      <p>
        Zaza Technologies UG (haftungsbeschränkt)<br/>
        Gumbertstraße 150<br/>
        40229 Düsseldorf<br/>
        Deutschland
      </p>
    </PageShell>
  );
}