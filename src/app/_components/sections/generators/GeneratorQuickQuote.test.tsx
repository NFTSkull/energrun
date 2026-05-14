import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GeneratorQuickQuote } from "@/app/_components/sections/generators/GeneratorQuickQuote";

describe("GeneratorQuickQuote", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    class IntersectionObserverMock implements IntersectionObserver {
      readonly root: Element | Document | null = null;
      readonly rootMargin = "0px";
      readonly thresholds = [0];
      disconnect = jest.fn();
      observe = jest.fn();
      takeRecords = jest.fn(() => []);
      unobserve = jest.fn();
      constructor(
        readonly callback: IntersectionObserverCallback,
        readonly options?: IntersectionObserverInit,
      ) {
        void callback;
        void options;
      }
    }

    Object.defineProperty(window, "IntersectionObserver", {
      writable: true,
      value: IntersectionObserverMock,
    });
  });

  it("muestra recomendación al seleccionar cargas y calcular", async () => {
    const user = userEvent.setup();
    render(<GeneratorQuickQuote />);

    await user.click(screen.getByRole("button", { name: /Aumentar Refrigerador/i }));
    await user.click(screen.getByRole("button", { name: /Calcular recomendación/i }));

    expect(screen.getByText(/Capacidad estimada/i)).toBeInTheDocument();
    expect(screen.getByText("3.0 kW")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Con lo que seleccionaste, el generador recomendado inicialmente es/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/Guardian Air Cooled 10 kW/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Generador recomendado/i).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /Enviar selección por WhatsApp/i })).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me"),
    );
  });

  it("cambia las cargas visibles según tipo de proyecto", async () => {
    const user = userEvent.setup();
    render(<GeneratorQuickQuote />);

    await user.click(screen.getByRole("button", { name: /Negocio/i }));

    expect(screen.getByText("Punto de venta")).toBeInTheDocument();
    expect(screen.queryByText("Concentrador de oxígeno")).not.toBeInTheDocument();
  });

  it("incluye paso 4 para arranques simultáneos", () => {
    render(<GeneratorQuickQuote />);
    expect(screen.getByText(/Paso 4/i)).toBeInTheDocument();
    expect(screen.getByText(/Escenario de arranque/i)).toBeInTheDocument();
  });
});
