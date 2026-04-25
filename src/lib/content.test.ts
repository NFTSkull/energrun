import {
  businessLines,
  generatorBlocks,
  homeFeaturedProjects,
  homeTestimonials,
  solarApplicationBlocks,
} from "@/lib/content";

describe("content architecture", () => {
  it("exposes two business lines with dedicated routes", () => {
    expect(businessLines).toHaveLength(2);
    expect(businessLines.map((line) => line.href)).toEqual([
      "/paneles-solares",
      "/generadores",
    ]);
    expect(businessLines.map((line) => line.image.src)).toEqual([
      "/residencial.png",
      "/hogares.png",
    ]);
  });

  it("keeps complete Generac catalog blocks", () => {
    expect(generatorBlocks).toHaveLength(5);
    expect(generatorBlocks.map((block) => block.id)).toEqual([
      "residencial-comercial",
      "liquid-cooled-comercial",
      "industriales",
      "moviles",
      "complementarios",
    ]);
  });

  it("keeps three solar application segments", () => {
    expect(solarApplicationBlocks.map((segment) => segment.title)).toEqual([
      "Residencial",
      "Comercial",
      "Industria ligera",
    ]);
  });

  it("exposes home highlights with requested image assets", () => {
    expect(homeFeaturedProjects.map((p) => p.image.src)).toEqual([
      "/residencia.png",
      "/comercial.png",
      "/industrial.png",
    ]);
  });

  it("exposes three testimonials for social proof", () => {
    expect(homeTestimonials).toHaveLength(3);
  });
});
