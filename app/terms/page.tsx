import LegalLayout from "@/components/LegalLayout";
export const metadata = { title: "Terms of Service" };

export default function Page() {
  return (
    <LegalLayout title="Terms of Service">
      <p>By using Zaza Teach, you agree to these terms. Do not misuse the service.</p>
      <h2>Subscriptions & Billing</h2>
      <p>Subscriptions renew automatically unless cancelled. Taxes may apply.</p>
      <h2>Liability</h2>
      <p>Service is provided "as is" without warranties; our liability is limited as permitted by law.</p>
    </LegalLayout>
  );
}