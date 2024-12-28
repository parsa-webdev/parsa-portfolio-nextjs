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
        <title>Parsa Morshed</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          key="1"
          name="title"
          content="Parsa Morshed | Frontend Developer & UI/UX Specialist"
        />
        <meta
          key="2"
          name="description"
          content="Highly Rated Frontend Engineer: Trusted by Clients to Deliver Scalable, Modern, and Impactful Web Experiences."
        />

        <meta key="3" property="og:type" content="website" />
        <meta key="4" property="og:url" content="https://devparsa.com" />
        <meta
          key="5"
          property="og:title"
          content="Parsa Morshed | Frontend Developer & UI/UX Specialist - Build Scalable Web Apps"
        />
        <meta
          key="6"
          property="og:description"
          content="Highly Rated Frontend Engineer: Trusted by Clients to Deliver Scalable, Modern, and Impactful Web Experiences."
        />
        <meta key="7" property="og:image" content="/preview.jpg" />

        <meta key="8" property="twitter:card" content="summary_large_image" />
        <meta key="9" property="twitter:url" content="https://devparsa.com" />
        <meta
          key="10"
          property="twitter:title"
          content="Parsa Morshed | Frontend Developer & UI/UX Specialist - Build Scalable Web Apps"
        />
        <meta
          key="11"
          property="twitter:description"
          content="Highly Rated Frontend Engineer: Trusted by Clients to Deliver Scalable, Modern, and Impactful Web Experiences."
        />
        <meta key="12" property="twitter:image" content="/preview.jpg" />
        <meta
          name="keywords"
          content="Developer, Frontend Developer, Frontend Engineer, Software Developer, Software Engineer, Software QA, QA Analyst, QA Specialist, Next.js Developer, React Developer, UI/UX Designer, High-Performance Websites, Responsive Design, SEO Optimization, Web Application Developer, JavaScript Developer, TypeScript Developer, Mobile App Developer, React Native Developer, Website Designer, User Interface Designer, User Experience Designer, QA Tester, Web Accessibility Expert, Performance Optimization Specialist"
        />

        <meta name="robots" content="index, follow" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://devparsa.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Parsa Morshed Portfolio" />
      </Head>

      <div className="bg-dark">
        <HeroDesk />
        <HeroMob />
        <PortfolioDesk />
        <Contact />
      </div>
    </>
  );
}
