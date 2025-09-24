import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service | Zaza Teach",
  description: "The terms that govern your use of Zaza Teach.",
};

export default function TermsPage() {
  return (
    <PageShell title="Terms of Service">
      <p><em>Last updated: September 22, 2025</em></p>

      <h2>Overview</h2>
      <p>
        These Terms of Service ("Terms") govern your use of Zaza Teach services. By using our service,
        you agree to be bound by these terms and our Privacy Policy.
      </p>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using Zaza Teach, you acknowledge that you have read, understood, and agree to
        be legally bound by these Terms. If you do not agree, please discontinue use immediately.
      </p>

      <h2>Description of Service</h2>
      <p>
        Zaza Teach provides AI-powered lesson planning tools and educational resources for teachers and
        educational institutions. Our service includes lesson plan generation, curriculum alignment,
        and educational content management.
      </p>

      <h2>User Accounts</h2>
      <ul>
        <li>You must provide accurate and complete information when creating an account</li>
        <li>You are responsible for maintaining the security of your account credentials</li>
        <li>You must be at least 18 years old or have parental consent to use our service</li>
        <li>One person or entity may not maintain multiple accounts</li>
      </ul>

      <h2>Acceptable Use</h2>
      <p>You agree to use Zaza Teach only for lawful purposes and in accordance with these Terms. You agree not to:</p>
      <ul>
        <li>Use the service for any illegal activities or to promote illegal activities</li>
        <li>Violate any laws, regulations, or third-party rights</li>
        <li>Upload harmful, offensive, or inappropriate content</li>
        <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
        <li>Use the service to harass, abuse, or harm another person</li>
        <li>Reverse engineer, decompile, or attempt to extract source code</li>
      </ul>

      <h2>Intellectual Property</h2>
      <ul>
        <li>Zaza Teach retains all rights to our software, algorithms, and proprietary content</li>
        <li>You retain ownership of your original content and lesson plans</li>
        <li>By using our service, you grant us limited rights to process your content to provide our services</li>
        <li>You may not use our trademarks, logos, or branding without written permission</li>
      </ul>

      <h2>Content and Data</h2>
      <ul>
        <li>You are responsible for the content you upload and share</li>
        <li>We reserve the right to remove content that violates these Terms</li>
        <li>Student data is protected according to applicable privacy laws and our Privacy Policy</li>
        <li>We do not claim ownership of your educational content or lesson plans</li>
      </ul>

      <h2>Subscriptions and Billing</h2>
      <ul>
        <li>Subscription fees are billed in advance on a monthly or annual basis</li>
        <li>Subscriptions automatically renew unless cancelled before the next billing cycle</li>
        <li>All fees are non-refundable except where required by law</li>
        <li>We may change subscription prices with 30 days advance notice</li>
        <li>Taxes may apply and are your responsibility</li>
      </ul>

      <h2>Free Trial and Promotions</h2>
      <ul>
        <li>Free trials are limited to new users and one trial per person/organization</li>
        <li>Trial accounts may have limited features or usage restrictions</li>
        <li>Promotional pricing is subject to specific terms and conditions</li>
        <li>We reserve the right to modify or terminate promotions at any time</li>
      </ul>

      <h2>Account Termination</h2>
      <ul>
        <li>You may cancel your account at any time through your account settings</li>
        <li>We may suspend or terminate accounts that violate these Terms</li>
        <li>Upon termination, your access to the service will cease immediately</li>
        <li>Data retention after termination follows our Privacy Policy</li>
      </ul>

      <h2>Service Availability</h2>
      <ul>
        <li>We strive for high availability but cannot guarantee uninterrupted service</li>
        <li>Scheduled maintenance will be announced when possible</li>
        <li>We are not liable for service interruptions beyond our reasonable control</li>
      </ul>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Zaza Teach's total liability shall not exceed the amount
        paid by you in the 12 months preceding the claim. We shall not be liable for indirect, incidental,
        special, consequential, or punitive damages.
      </p>

      <h2>Disclaimers</h2>
      <p>
        Our service is provided "as is" without warranties of any kind. We disclaim all warranties,
        express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to defend, indemnify, and hold harmless Zaza Teach from any claims, damages, or expenses
        arising from your use of our service or violation of these Terms.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. We will notify users of significant changes via email or
        service notifications. Continued use after changes constitutes acceptance of new Terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of Germany. Any disputes shall be resolved in the courts
        of Düsseldorf, Germany.
      </p>

      <h2>Contact Information</h2>
      <p>
        For questions about these Terms, contact us at:
      </p>
      <ul>
        <li>Email: <a href="mailto:legal@zazateach.com">legal@zazateach.com</a></li>
        <li>Address: Gumbertstraße 150, 40229 Düsseldorf, Deutschland</li>
      </ul>
    </PageShell>
  );
}