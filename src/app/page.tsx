"use client";
import { NextUIProvider } from "@nextui-org/react";
import LandingPage from "@/components/landind-page";
import Head from "next/head";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');`}
        </style>
      </Head>
      <NextUIProvider>
        <LandingPage />
      </NextUIProvider>
    </>
  );
}
