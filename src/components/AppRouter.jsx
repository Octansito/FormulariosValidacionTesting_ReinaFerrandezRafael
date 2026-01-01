import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import Fichas from "../pages/Fichas";
import Admin from "../pages/Admin";
import Contenedor from "./Contenedor";
import Login from "../pages/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import FormControlado from "./FormularioControladoAnimal.jsx";

/**
 *
 *
 */

function AppRouter() {
  return (
    <Routes>
      <Route element={<Contenedor />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/fichas" element={<Fichas />} />
        {/**Envolvemos la ruta admin con protectedRoute, es nuestro children */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
          {/* subruta del formulario dentrod de admin*/}
          <Route path="animalformcont" element={<FormControlado />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Route>

      {/**Ruta 404 */}
      <Route
        path="*"
        element={
          <Contenedor titulo="Página no encontrada">
            <p>La ruta a la que desea acceder no existe</p>
          </Contenedor>
        }
      />
    </Routes>
  );
}

export default AppRouter;
