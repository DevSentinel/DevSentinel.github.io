import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./timeline-custom.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Holocaust History Project",
  description: "Exploring the Holocaust with a focus on Canada's connections and perspectives",
  keywords: ["Holocaust", "History", "Canada", "World War II", "Education", "Timeline", "Maps"],
  authors: [{ name: "Holocaust History Project Team" }],
  creator: "Holocaust History Project",
  openGraph: {
    title: "Holocaust History Project",
    description: "Exploring the Holocaust with a focus on Canada's connections and perspectives",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
