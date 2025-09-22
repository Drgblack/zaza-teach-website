import LegalLayout from "@/components/LegalLayout";
export const metadata = { title: "Impressum" };

export default function Page() {
  return (
    <LegalLayout title="Impressum">
      <p>Zaza Teach • Part of Zaza Technologies</p>
      <p>Registered office: Gumbertstraße 150, 40229 Düsseldorf, Deutschland</p>
      <p>Contact: help@zazatechnologies.com</p>
    </LegalLayout>
  );
}