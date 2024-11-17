"use client";
import { NextUIProvider } from "@nextui-org/react";
import LandingPage from "@/app/components/landind-page";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";
import { useEffect, useState } from "react";

interface IdeaData {
  name: string;
  ideas: string[];
}

export default function Home() {
  const [ideas, setIdeas] = useState<Record<string, IdeaData>>({}); // Almacena ideas de todos los usuarios
  const [newIdeas, setNewIdeas] = useState<Record<string, string>>({}); // Almacena ideas temporales por usuario

  // Cargar ideas al montar el componente
  useEffect(() => {
    fetch("/api/ideas")
      .then((res) => res.json())
      .then((data) => setIdeas(data));
  }, []);

  // Manejar el envío de una nueva idea
  const handleSubmit = async (name: string) => {
    if (!newIdeas[name]) return;

    const res = await fetch("/api/ideas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, idea: newIdeas[name] }),
    });

    if (res.ok) {
      const updatedIdeas = await res.json();
      setIdeas((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          ideas: [...(prev[name]?.ideas || []), newIdeas[name]],
        },
      }));
      setNewIdeas((prev) => ({ ...prev, [name]: "" })); // Resetea el textarea
    }
  };
  return (
    <>
      <NextUIProvider>
        <LandingPage />
      </NextUIProvider>
    </>
  );
}
