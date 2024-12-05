import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "findBlue",
  description: "findBlue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/findBlueLogo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="root-layout">
        <div className="page-content">{children}</div>
        <footer className="footer">
          <p className="footer-text">© 2024 FindBlue@Michigan | findblue@umich.edu</p>
        </footer>
      </body>
    </html>
  );
}
