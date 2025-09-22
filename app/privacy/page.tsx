import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>Last updated: {new Date().toISOString().slice(0,10)}</p>
      <p>
        This Privacy Policy explains how Zaza Teach ("we", "us") collects,
        uses, and protects your information. We collect only what's necessary
        to provide our service and comply with the law. Contact: help@zazatechnologies.com
      </p>
      <h2>Data We Process</h2>
      <ul>
        <li>Account & billing details you provide</li>
        <li>Product usage (aggregated/diagnostic)</li>
        <li>Support communications</li>
      </ul>
      <h2>Your Rights</h2>
      <p>You can request access, correction, export, or deletion of your data at any time.</p>
    </LegalLayout>
  );
}