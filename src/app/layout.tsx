import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "700"], // Specify the font weights you need
  subsets: ["latin"], // Include 'latin' for standard English characters
});

export const metadata: Metadata = {
  title: "Parsa Morshed",
  description: "Highly Rated Frontend Developer",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Custom meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={`${poppins.className}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
