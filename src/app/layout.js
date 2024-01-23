import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LogoMain from "@/components/UI/Logo/LogoMain";
import { IBM_Plex_Sans } from "next/font/google";
import Divider from "@/components/UI/Divider/Divider";
import { Analytics } from '@vercel/analytics/react';

const mukta = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Negro Mangalica",
  description:
    "Az Negro Mangalica egy Deli és bár Budapesten, ahol spanyol ízekkel kényeztetünk helyben és elvitelre is. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={mukta.className}>
        <Navbar nav={true} />
        {children}
        <Analytics />

        <Divider />
        <Navbar NavFooter={true} />
        <Footer />
      </body>
    </html>
  );
}
