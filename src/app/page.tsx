"use client";
import { NextUIProvider } from "@nextui-org/react";
import LandingPage from "@/app/components/landind-page";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <LandingPage />
      </NextUIProvider>
    </>
  );
}
