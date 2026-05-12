import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetweenVisits — Neurorehabilitation through play",
  description:
    "Clinical-grade neurorehabilitation using computer vision. No hardware needed. Hand kinematics, facial gestures, voice biomarkers, and eye tracking from any camera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col font-sans text-stone-800">
        {children}
      </body>
    </html>
  );
}
