import "../css/globals.css";


export const metadata = {
  title: "Portfolio | voorde.dk",
  description: "Full stack Web developer Joris ten Voorde, portfolio-page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
