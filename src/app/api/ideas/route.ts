import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

// Ruta del archivo JSON
const filePath = path.resolve(process.cwd(), "ideas.json");

// Leer las ideas del archivo
const readIdeas = (): Record<string, { name: string; ideas: string[] }> => {
  if (!fs.existsSync(filePath)) return {};
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data || "{}");
};

// Escribir nuevas ideas en el archivo
const writeIdeas = (
  ideas: Record<string, { name: string; ideas: string[] }>
) => {
  fs.writeFileSync(filePath, JSON.stringify(ideas, null, 2));
};

export async function GET() {
  // Devuelve todas las ideas guardadas
  const ideas = readIdeas();
  return NextResponse.json(ideas, { status: 200 });
}

export async function POST(req: NextRequest) {
  // Extrae los datos enviados en el cuerpo de la petición
  const { name, idea } = await req.json();

  if (!name || !idea) {
    return NextResponse.json(
      { error: "Name and idea are required" },
      { status: 400 }
    );
  }

  const ideas = readIdeas();

  // Si no hay un registro para este nombre, lo inicializamos
  if (!ideas[name]) {
    ideas[name] = { name, ideas: [] };
  }

  // Agregamos la idea
  ideas[name].ideas.push(idea);
  writeIdeas(ideas);

  return NextResponse.json({ success: true }, { status: 201 });
}
