"use client";

import Head from "next/head";
import Contact from "./components/ContactDesk/ContactDesk";
import HeroDesk from "./components/HeroDesk/HeroDesk";
import HeroMob from "./components/HeroMob/HeroMob";
import PortfolioDesk from "./components/PortfolioDesk/PortfolioDesk";

export default function Home() {
  return (
    <>
      <Head>
        {/* Set theme color for Android */}
        <meta name="theme-color" content="#000000" />

        {/* Set theme color for iOS Safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <HeroDesk />
      <HeroMob />
      <PortfolioDesk />
      <Contact />
    </>
  );
}
