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

const LoaderContainer = styled.div<{ fadingout: boolean }>`
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
  animation: ${({ fadingout }) =>
    fadingout &&
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
  animation: ${glow} 3s infinite ease-in-out;
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
      }, 500);
    };

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
  }, []);

  return (
    <html lang="en">
      <head></head>
      <body className={`${poppins.className}`}>
        {isLoading ? (
          <StyledComponentsRegistry>
            {/* @ts-expect-error type-error */}
            <LoaderContainer fadingout={fadingOut ? "true" : "false"}>
              <GlowingLoader>PM</GlowingLoader>
            </LoaderContainer>
          </StyledComponentsRegistry>
        ) : (
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        )}
      </body>
    </html>
  );
}
