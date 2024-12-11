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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
