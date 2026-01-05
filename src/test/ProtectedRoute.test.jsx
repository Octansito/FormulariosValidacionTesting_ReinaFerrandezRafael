import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AppRouter from "../components/AppRouter";
import AuthProvider, { AuthContext } from "../auth/AuthContext";

describe("Seguridad - RUTA PROTEGIDA /admin", () => {
  //Antes de nada, limpiamos el Storage
  beforeEach(() => {
    localStorage.clear();
  });

  test("NO autenticado: al entrar en /admin redirige a Login", async () => {
    //Arrange
    render(
      <AuthProvider>
        <MemoryRouter initialEntries={["/admin"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthProvider>
    );
    // Act (no hay interacción)

    // Assert
    expect(
      await screen.findByRole("heading", { name: /accede a tu cuenta/i })
    ).toBeInTheDocument();
  });
  test("Usuario autenticado: al entrar en /admin redirige a Admin", async () => {
    //Arrange
    // Al renderizar /admin, la protección ve isAuth=true desde el principio
    render(
      <AuthContext.Provider
        value={{ isAuth: true, login: () => {}, logout: () => {} }}
      >
        <MemoryRouter initialEntries={["/admin"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // Act (no hay interacción)

    // Assert
    expect(
      await screen.findByRole("heading", { name: /página de administración/i })
    ).toBeInTheDocument();
  });
});
