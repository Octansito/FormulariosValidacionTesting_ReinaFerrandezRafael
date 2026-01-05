import { describe, test, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hola from "./Hola";
describe("Componente Hola", () => {
  test("muestra el nombre correctamente", () => {
    render(<Hola nombre="Marina" />);
    expect(screen.getByText("Hola Marina")).toBeInTheDocument();
  });
  it("no muestra el nombre correctamente", () => {
    render(<Hola nombre="MarinaDor" />);
    expect(screen.getByText("Hola Marina")).toBeInTheDocument();
  });
});
