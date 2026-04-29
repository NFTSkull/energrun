import {
  GENERADORES_HERO_IMAGE,
  PANELES_SOLARES_HERO_IMAGE,
} from "@/lib/pageHeroBackgrounds";

describe("pageHeroBackgrounds", () => {
  it("apunta a los PNG de hero en public/", () => {
    expect(PANELES_SOLARES_HERO_IMAGE.src).toBe("/recibo.png");
    expect(GENERADORES_HERO_IMAGE.src).toBe("/generadores.png");
  });
});
