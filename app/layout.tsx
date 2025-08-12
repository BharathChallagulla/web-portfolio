// -----------------------------------------------------------
// File: /app/layout.tsx
// Description: The root layout of the Next.js application.
// This is a Server Component and sets up the global HTML structure.
// -----------------------------------------------------------
import type { Metadata } from "next";
import "./globals.css"; // Assuming you have a globals.css file for Tailwind's base styles

export const metadata: Metadata = {
  title: "Leela Gopala Bharath Kumar Challagulla - Portfolio",
  description:
    "Portfolio for a full-stack developer specializing in MERN and Java.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
