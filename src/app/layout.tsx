import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevDoc: AI Coding with Up-to-Date Documentation",
  description:
    "Stop writing outdated code. DevDoc is a VS Code extension that ensures your AI-generated code is always correct and secure by using a real-time documentation vector store.",

  keywords: [
    "DevDoc",
    "ai",
    "codegen",
    "code generation",
    "documentation",
    "up-to-date",
    "nextjs",
    "tailwind css",
    "react",
    "typescript",
    "javascript",
    "vscode extension",
    "vulnerability",
    "secure coding",
    "developer tools",
    "vector database",
    "real-time docs",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),

  openGraph: {
    title: "DevDoc: AI Coding with Up-to-Date Documentation",
    description:
      "Stop writing outdated code. DevDoc ensures your AI-generated code is always correct and secure.",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
