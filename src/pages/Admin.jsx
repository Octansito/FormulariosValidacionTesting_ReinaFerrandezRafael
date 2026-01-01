import { NavLink, Navigate, useLocation } from "react-router-dom";

/**
 * Página de administración
 * - Muestra el panel y la navegación interna.
 * - Renderiza las subrutas (formularios) con <Outlet />.
 */
function Admin() {
  const location = useLocation();

  // Si entran a /admin, redirige a la sección por defecto
  if (location.pathname === "/admin") {
    return <Navigate to="/admin/animalformcont" replace />;
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-[var(--colorprimary)] mb-6 text-center">
        Página de Administración
      </h1>

      <section className="text-lg text-[var(--colorgrey-1)] text-center mb-6">
        <p>Aquí podrás gestionar los datos de la aplicación.</p>
      </section>
      {/**Navegación de la administración */}
      <nav className="flex justify-center gap-4 border-b pb-2 mb-6">
        <NavLink
          to="animalformcont"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
              isActive
                ? "bg-[var(--colorprimary)]/10 text-[var(--colorprimary)] border-b-2 border-[var(--colorprimary)]"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          Añadir Animal
        </NavLink>
      </nav>

      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default Admin;
