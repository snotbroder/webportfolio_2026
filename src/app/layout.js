import "../css/globals.css";
import { Poppins, Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Portfolio | voorde.dk",
  description: "Full stack Web developer Joris ten Voorde, portfolio-page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Navigation />
        <main className="max-w-6xl my-20 mx-auto mt-32 px-6 md:px-12 lg:px-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
