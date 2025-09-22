import LegalLayout from "@/components/LegalLayout";
export const metadata = { title: "Cookie Policy" };

export default function Page() {
  return (
    <LegalLayout title="Cookie Policy">
      <p>We use essential cookies for security and session, and optional analytics to improve the product.</p>
      <ul>
        <li>Essential: authentication, CSRF, load balancing</li>
        <li>Analytics (optional): product usage insights</li>
      </ul>
    </LegalLayout>
  );
}