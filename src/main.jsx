import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";
import { BrowserRouter } from "react-router-dom";

/**
 * La navegación debe estar envuelta por <BrowserRouter> para permitir el control del historial y la navegación sin recargar la página.
 * Por este motivo, en main.jsx coloco <BrowserRouter> envolviendo a <App />, de forma que todas las rutas declaradas con <Route> y <Routes> funcionen correctamente.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      {/**
       * Enlace de salto accesible
       */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded z-50"
      >
        Saltar al contenido principal
      </a>

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  </StrictMode>
);
