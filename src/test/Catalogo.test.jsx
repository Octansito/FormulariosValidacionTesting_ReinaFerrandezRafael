import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Catalogo from "../pages/Catalogo";

describe("Catalogo - búsqueda", () => {
  test("filtra animales por nombre/raza al escribir en el buscador", async () => {
    // Arrange Primera A
    render(
      <MemoryRouter>
        {/**El componente se engloba con MemoryRouter porque usa Routes, Link o useNavigate */}
        <Catalogo />
      </MemoryRouter>
    );
    {
      /**Creo un usuario simulado */
    }
    const user = userEvent.setup();

    const input = screen.getByPlaceholderText(/buscar por nombre, raza/i);

    // Act Segunda A--> Que hace el usuario
    await user.type(input, "Tobby");

    // Assert Tercera A
    // Opción A (si el nombre del animal se renderiza como texto visible)
    expect(screen.getByText(/tobby/i)).toBeInTheDocument();

    // Opción B (comprobar que otro NO está)
    expect(screen.queryByText(/dumbo/i)).not.toBeInTheDocument();
  });
});
