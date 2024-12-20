import StyledComponentsRegistry from "./lib/registry";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"], // Specify the font weights you need
  subsets: ["latin"], // Include 'latin' for standard English characters
});

export const metadata: Metadata = {
  title: "Parsa Morshed",
  description:
    "Highly Rated Frontend Engineer: Trusted by Clients to Deliver Scalable, Modern, and Impactful Web Experiences.",
  openGraph: {
    title: "Parsa Morshed | Frontend Developer",
    description:
      "Highly Rated Frontend Engineer: Trusted by Clients to Deliver Scalable, Modern, and Impactful Web Experiences.",
    url: "", // Update with your site's URL
    images: [
      {
        url: "/preview.jpg", // Add a relevant image URL
        width: 1200,
        height: 630,
        alt: "Parsa Morshed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "", // Add your Twitter handle here
    title: "Parsa Morshed | Frontend Developer",
    description:
      "Highly Rated Frontend Engineer: Trusted by Clients to Deliver Scalable, Modern, and Impactful Web Experiences.",
    //@ts-expect-error type-error
    image: "/preview.jpg", // Add your image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Global Meta Tags */}
        <meta
          name="description"
          content="Highly Rated Frontend Engineer: Trusted by Clients to Deliver Scalable, Modern,
and Impactful Web Experiences."
        />
        <meta
          name="keywords"
          content="Frontend Developer, React Developer, Web Developer, Developer, Designer, Next.js, React, Web Development, JavaScript, Frontend,"
        />
        <meta name="author" content="Parsa Morshed" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Parsa Morshed | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Highly Rated Frontend Engineer: Trusted by Clients to Deliver Scalable, Modern,
          and Impactful Web Experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Parsa Morshed" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta
          name="twitter:title"
          content="Parsa Morshed | Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Highly Rated Frontend Engineer: Trusted by Clients to Deliver Scalable, Modern,
          and Impactful Web Experiences."
        />
        <meta name="twitter:image" content="/preview.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Set theme color for Android */}
        <meta name="theme-color" content="#000000" />

        {/* Set theme color for iOS Safari */}
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
