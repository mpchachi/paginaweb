import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollProvider } from "@/components/scroll-provider";
import { AnimatedBackground } from "@/components/ui/animated-background";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetweenVisits — Recovery happens every day. Clinical insight should too.",
  description:
    "SteadyArc captures hand kinematics, facial symmetry, and gaze patterns through any camera — turning a simple game into continuous, objective stroke recovery data for clinicians. No hardware needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", playfair.variable, jetbrainsMono.variable)}
    >
      <body className="min-h-dvh flex flex-col font-sans text-white">
        <AnimatedBackground />
        <ScrollProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
