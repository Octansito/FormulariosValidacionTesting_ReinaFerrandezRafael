import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import PetCard from "../components/PetCard";

describe("PetCard - favorito (regresión)", () => {
  test("al pulsar favorito cambia aria-pressed y aria-label", async () => {
    // Arrange
    render(
      <MemoryRouter>
        <PetCard
          id={1}
          nombre="Marcus"
          genero="Macho"
          edad="10 años"
          imagen="http://example.com/tobby.jpg"
          ubicacion="Elche"
          tamaño="Mediano"
          chip="No"
          numChip=""
          descripcion="Un perro muy bueno."
          raza="Mestizo"
        />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    // El botón se encuentra por rol y nombre accesible (aria-label)
    const favBtn = screen.getByRole("button", {
      name: /marcar como favorito/i,
    });

    // Assert (estado inicial)
    expect(favBtn).toHaveAttribute("aria-pressed", "false");

    // Act
    await user.click(favBtn);

    // Assert (estado final)
    expect(favBtn).toHaveAttribute("aria-pressed", "true");
    expect(favBtn).toHaveAccessibleName(/quitar de favoritos/i);
  });
});
