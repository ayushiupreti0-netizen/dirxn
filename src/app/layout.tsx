import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import RouteTransition from "@/components/RouteTransition";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dirxn.com"),
  title: {
    default: "DIRXN | Design & Development Studio",
    template: "%s | DIRXN",
  },
  description:
    "DIRXN is a design studio. We combine strategy and creativity to build brand identities, logos, websites and digital marketing that give your brand a direction.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-64.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "DIRXN | Design & Development Studio",
    description:
      "Brand identity, logo design, website design & development and digital marketing.",
    images: ["/img/og-image.jpg"],
    type: "website",
  },
};

export const viewport = { themeColor: "#ffffff" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <MotionConfig reducedMotion="user">
          <SmoothScroll />
          <Cursor />
          <Header />
          <RouteTransition>{children}</RouteTransition>
        </MotionConfig>
      </body>
    </html>
  );
}
