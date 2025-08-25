// -----------------------------------------------------------
// File: /app/layout.tsx
// Description: The root layout of the Next.js application.
// This is a Server Component and sets up the global HTML structure.
// -----------------------------------------------------------
import type { Metadata } from "next";
import "./globals.css"; // Assuming you have a globals.css file for Tailwind's base styles
import { ToastComponent } from "./components/ToastComponent";

export const metadata: Metadata = {
  // Primary SEO Meta Tags
  title:
    "Leela Gopala Bharath Kumar Challagulla | Java Full Stack Developer | Java, Spring Boot, React.js",
  description:
    "Full Stack Developer with over 3 years of experience specializing in scalable, enterprise-grade applications. Expertise in secure, cloud-native microservices architectures, responsive frontends with React.js, and CI/CD automation.",

  // Open Graph Tags for Social Media Sharing (LinkedIn, Facebook, etc.)
  openGraph: {
    title:
      "Leela Gopala Bharath Kumar Challagulla | Java Full Stack Developer Portfolio",
    description:
      "Full Stack Developer with over 3 years of experience specializing in scalable, enterprise-grade applications. Expertise in secure, cloud-native microservices architectures, responsive frontends with React.js, and CI/CD automation.",
    url: "https://bharathchallagulla.vercel.app",
    type: "profile",
  },

  // Keywords for Search Engines
  keywords: [
    "Leela Gopala Bharath Kumar Challagulla",
    "Java",
    "Spring Boot",
    "React.js",
    "Microservices",
    "CI/CD",
    "DevOps",
    "AWS",
    "Azure",
    "PostgreSQL",
    "Full Stack Developer",
    "Software Engineer",
    "Portfolio",
    "Resume",
  ],

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://bharathchallagulla.vercel.app/",
  },
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
