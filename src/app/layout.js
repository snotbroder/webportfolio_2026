import "../css/globals.css";
import { Poppins, Inter } from 'next/font/google'

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export const metadata = {
  title: "Portfolio | voorde.dk",
  description: "Full stack Web developer Joris ten Voorde, portfolio-page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>

      <body>
        <main className="max-w-6xl h-248 mx-auto mt-32 border-amber-300 border-x-2">
        {children}
        </main>
      </body>
    </html>
  );
}
