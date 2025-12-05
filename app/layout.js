import "./globals.css";
import { Fredoka, Space_Grotesk } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata = {
  title: "Alejandro De La Mora | AI Solutions Architect",
  description:
    "Resume site for Alejandro De La Mora showcasing AI and Salesforce expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
