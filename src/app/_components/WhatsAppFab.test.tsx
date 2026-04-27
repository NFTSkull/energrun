import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WhatsAppFab } from "@/app/_components/WhatsAppFab";

describe("WhatsAppFab", () => {
  it("hace scroll al siguiente paso al seleccionar opciones", async () => {
    const user = userEvent.setup();
    const scrollMock = jest.fn();
    const rafSpy = jest
      .spyOn(globalThis, "requestAnimationFrame")
      .mockImplementation((cb: FrameRequestCallback) => {
        cb(0);
        return 0;
      });
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollMock,
      writable: true,
    });

    render(<WhatsAppFab />);

    await user.click(screen.getByRole("button", { name: /contacto por whatsapp/i }));
    expect(screen.getByText(/1\) que te interesa/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /paneles solares/i }));
    expect(screen.getByText(/2\) cual es tu duda principal/i)).toBeInTheDocument();
    expect(screen.getByTestId("chat-step-faq")).toBeInTheDocument();
    expect(scrollMock).toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: /cuanto ahorro/i }));
    expect(screen.getByText(/respuesta rapida/i)).toBeInTheDocument();
    expect(screen.getByText(/tipo de inmueble/i)).toBeInTheDocument();
    expect(screen.getByTestId("chat-step-segment")).toBeInTheDocument();
    expect(scrollMock).toHaveBeenCalled();

    rafSpy.mockRestore();
  });
});

