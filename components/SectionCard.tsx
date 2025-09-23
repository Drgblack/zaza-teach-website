"use client";
import { motion } from "framer-motion";

export function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-700/50 dark:bg-slate-900"
    >
      {children}
    </motion.section>
  );
}