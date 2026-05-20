import type { Metadata } from "next";
import { IBM_Plex_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Background from "@/components/Background";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  weight: ["400"],
  variable: "--font-press-start",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pendem Ajay | Cyber Security Enthusiast & AI Engineer",
  description: "Portfolio of Pendem Ajay featuring experience in Cyber Security, AI Agents, automation, and full-stack web development.",
  keywords: ["Pendem Ajay", "Portfolio", "Cyber Security", "AI Engineer", "Next.js", "React", "n8n"],
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${pressStart.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Background />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
