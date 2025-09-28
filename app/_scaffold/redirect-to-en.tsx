import { redirect } from "next/navigation";
export default function RedirectToEn({ to }: { to: string }) {
  redirect(`/en${to.startsWith("/") ? "" : "/"}${to}`);
}