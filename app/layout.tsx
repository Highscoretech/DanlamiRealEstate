import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danlami Real Estate — Website Brief",
  description:
    "What we need from Danlami Real Estate to build danlamirealestate.com, shown section by section.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
