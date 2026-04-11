import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Bharath Challagulla | Full Stack Developer | Java, Spring Boot, React.js",
  description:
    "Full Stack Developer with 3+ years of experience building scalable enterprise applications with Java, Spring Boot, React.js, and cloud-native architectures.",
  openGraph: {
    title: "Bharath Challagulla | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer with 3+ years of experience building scalable enterprise applications.",
    url: "https://bharathchallagulla.vercel.app",
    type: "profile",
  },
  keywords: [
    "Bharath Challagulla",
    "Full Stack Developer",
    "Java",
    "Spring Boot",
    "React.js",
    "Microservices",
    "Portfolio",
    "Software Engineer",
  ],
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
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
