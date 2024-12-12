"use client";

import HeroDesk from "./components/HeroDesk/HeroDesk";
import HeroMob from "./components/HeroMob/HeroMob";
import PortfolioDesk from "./components/PortfolioDesk/PortfolioDesk";

export default function Home() {
  return (
    <>
      {" "}
      <HeroDesk />
      <HeroMob />
      <PortfolioDesk />
    </>
  );
}
