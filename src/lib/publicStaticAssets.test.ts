import fs from "node:fs";
import path from "node:path";

/**
 * Asegura que las rutas absolutas bajo / usadas en la app
 * correspondan a archivos reales en public/ (evita 404 en producción).
 */
const REQUIRED_IN_PUBLIC = [
  "favicon.ico",
  "logo1.png",
  "video_hero.mp4",
  "paneles.png",
  "generadores.png",
  "residencial.png",
  "hogares.png",
  "liquid.png",
  "industriales.png",
  "moviles.png",
  "complemetarios.png",
  "comercial.png",
  "industrial.png",
  "residencia.png",
  "comercio.png",
  "industria.png",
] as const;

describe("public/ static assets", () => {
  const dir = path.join(process.cwd(), "public");

  it.each(REQUIRED_IN_PUBLIC)("existe en public/: %s", (name) => {
    const full = path.join(dir, name);
    expect(fs.existsSync(full)).toBe(true);
  });
});
