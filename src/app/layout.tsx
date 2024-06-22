import type { Metadata } from "next";
import "./style.css";
import "./utils.css";
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,401,500,501,600,700,900&display=swap" rel="stylesheet" />
      </head>
      <body>
          {children}
        </body>
    </html>
  );
}
