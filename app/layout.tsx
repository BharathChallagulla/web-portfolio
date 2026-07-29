import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Bharath Challagulla | Full Stack Developer | Java, Spring Boot, React.js",
  description:
    "Full Stack Developer with about 5 years of experience building scalable enterprise applications with Java, Spring Boot, Node.js React.js, and cloud-native architectures.",
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
  