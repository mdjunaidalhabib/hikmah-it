import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/home/Navbar";
import BackToTopButton from "./components/home/BackToTopButton";
import Footer from "./components/home/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Hikmah IT",
  description: "Trusted Digital Solutions",
  icons: {
    icon: "/hikmah-it-rounded.ico ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
