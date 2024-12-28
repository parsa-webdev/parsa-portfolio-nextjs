"use client";
import StyledComponentsRegistry from "./lib/registry";
import { Poppins } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { variables } from "./Variables";
import styled, { keyframes, css } from "styled-components";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 2px #32FF92, 0 0 4px #32FF92, 0 0 6px #32FF92;
    transform: scale(1);
  }
  50% {
    text-shadow: 0 0 3px #32FF92, 0 0 6px #32FF92, 0 0 8px #32FF92;
    transform: scale(1.05);
  }
`;

const LoaderContainer = styled.div<{ $fadingout: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${variables.dark};
  z-index: 9999;
  opacity: 1;
  animation: ${({ $fadingout }) =>
    $fadingout &&
    css`
      ${fadeOut} 0.5s forwards;
    `};
`;

const GlowingLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100px;
  color: #32ff92;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  animation: ${glow} 1.5s infinite ease-in-out;
`;

const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Wait until the fade-out animation completes before setting isLoading to false
    };

    const handleImageLoad = () => {
      const images = document.querySelectorAll("img");
      const totalImages = images.length;
      let loadedImages = 0;

      if (totalImages === 0) {
        handleLoad();
      } else {
        images.forEach((img) => {
          if (img.complete) {
            loadedImages += 1;
            if (loadedImages === totalImages) handleLoad();
          } else {
            img.addEventListener("load", () => {
              loadedImages += 1;
              if (loadedImages === totalImages) handleLoad();
            });

            img.addEventListener("error", () => {
              loadedImages += 1;
              if (loadedImages === totalImages) handleLoad();
            });
          }
        });
      }
    };

    // Wait until window and resources are fully loaded
    window.onload = handleImageLoad;

    // Fallback in case of rapid state changes
    const timer = setTimeout(() => {
      handleLoad(); // Ensure that it doesn't stay stuck in loading state
    }, 2000); // Time out after 2 seconds if images are not loading

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/brian.png" as="image" />
        <link rel="preload" href="/meDesk.jpg" as="image" />
        <link rel="preload" href="/meDesk.jpg" as="image" />
        <link rel="preload" href="/apeak.png" as="image" />
        <link rel="preload" href="/coachD.png" as="image" />
        <link rel="preload" href="/resourceD.png" as="image" />
      </head>
      <body className={`${poppins.className}`}>
        <StyledComponentsRegistry>
          <PageWrapper>
            {isLoading && (
              <LoaderContainer $fadingout={fadingOut}>
                <GlowingLoader>PM</GlowingLoader>
              </LoaderContainer>
            )}
            {!isLoading && children}
          </PageWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
