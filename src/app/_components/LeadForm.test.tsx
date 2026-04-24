import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LeadForm } from "@/app/_components/LeadForm";

describe("LeadForm", () => {
  it("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    render(<LeadForm />);

    await user.click(
      screen.getByRole("button", { name: /enviar y abrir whatsapp/i }),
    );

    expect(screen.getByText(/escribe tu nombre/i)).toBeInTheDocument();
    expect(screen.getByText(/escribe tu teléfono/i)).toBeInTheDocument();
  });

  it("opens WhatsApp on valid submit", async () => {
    const user = userEvent.setup();
    const openSpy = jest
      .spyOn(window, "open")
      .mockImplementation(() => null);

    render(<LeadForm />);

    await user.type(screen.getByLabelText(/nombre/i), "Gaby");
    await user.type(screen.getByLabelText(/teléfono/i), "81 1234 5678");

    await user.click(
      screen.getByRole("button", { name: /enviar y abrir whatsapp/i }),
    );

    expect(openSpy).toHaveBeenCalled();
    const [url] = openSpy.mock.calls[0] ?? [];
    expect(String(url)).toContain("https://wa.me/");

    openSpy.mockRestore();
  });
});

