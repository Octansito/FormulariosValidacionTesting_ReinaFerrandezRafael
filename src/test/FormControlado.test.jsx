import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormControlado from "../components/FormularioControladoAnimal";

describe("Formulario Controlado- validaciones", () => {
  test("Si chip = 'Sí' y numChip está vacío, muestra el error de numChip", async () => {
    //Arrange
    render(<FormControlado />);
    const user = userEvent.setup();

    //Act
    //Seleccionamos el chip= Sí para que aparezca el input numCHIP
    await user.selectOptions(screen.getByLabelText(/¿tiene chip\?/i), "Sí");

    //Relleno el resto de campos para que no fallen otras validaciones
    await user.type(screen.getByLabelText(/^nombre$/i), "Bobby");
    await user.type(screen.getByLabelText(/^raza$/i), "Pastor Aleman");
    await user.type(screen.getByLabelText(/^género$/i), "Macho");
    await user.clear(screen.getByLabelText(/^edad$/i));
    await user.type(screen.getByLabelText(/^edad$/i), "5");
    await user.type(screen.getByLabelText(/^ubicación$/i), "Elche");
    await user.type(screen.getByLabelText(/^tamaño$/i), "mediano");
    await user.type(
      screen.getByLabelText(/url de imagen/i),
      "http://ejemplo.com/img.jpg"
    );
    await user.type(screen.getByLabelText(/^descripción$/i), "a".repeat(110));
    await user.selectOptions(screen.getByLabelText(/^categoría$/i), "perro");

    //No escribo nada en "Num chip"
    await user.click(screen.getByRole("button", { name: /añadir animal/i }));

    //Assert
    expect(
      await screen.findByText(/el identificador del chip es obligatorio/i)
    ).toBeInTheDocument();
  });
});
