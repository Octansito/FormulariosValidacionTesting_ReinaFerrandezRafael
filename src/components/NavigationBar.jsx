import { useState } from "react";
import Logo from "../assets/Logo5.png";
import menuIcon from "../assets/menu.png";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0C3C34] w-full relative">
      {/* NAV PRINCIPAL */}
      <nav className="w-full flex items-center justify-between px-6 h-[45px] sm:h-[60px] lg:h-[90px]">
        {/* HAMBURGUESA SOLO EN MOVIL/TABLET */}
        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden bg-transparent p-0 m-0 hover:scale-110 transition"
          onClick={() => setOpen(!open)}
        >
          <img
            src={menuIcon}
            alt="Menú"
            className="h-5 w-5 sm:h-10 sm:w-10 lg:h-10 lg:w-10"
          />
        </button>
        {/* LOGO CENTRADO, pero en escritorio se desplaza al lado izquierdo */}
        <div className=" absolute left-1/2 -translate-x-1/2 flex items-center gap-2 lg:static lg:left-0 lg:translate-x-0">
          <img
            src={Logo}
            alt="Logo Pawpets"
            className=" w-[60px] h-[60px]     /* móvil */ sm:w-[70px] sm:h-[70px] /* tablet */ lg:w-[120px] lg:h-[120px] /* escritorio */"
          />

          <span className=" font-poppins font-bold text-white text-[25px] sm:text-[32px] lg:text-[48px] block">
            PawPets
          </span>
        </div>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden lg:flex gap-6 ml-auto">
          <NavLink
            to="/"
            className="text-white text-[22px] font-semibold hover:underline"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/catalogo"
            className="text-white text-[22px] font-semibold hover:underline"
          >
            Catálogo
          </NavLink>
          <NavLink
            to="/fichas"
            className="text-white text-[22px] font-semibold hover:underline"
          >
            Fichas
          </NavLink>
          <NavLink
            to="/admin"
            className="text-white text-[22px] font-semibold hover:underline"
          >
            Admin
          </NavLink>
        </div>
      </nav>

      {/* MENÚ MÓVIL / TABLET */}
      <nav
        id="mobile-menu"
        className={`${
          open ? "block" : "hidden"
        } lg:hidden bg-[#0C3C34] px-6 py-4`}
      >
        <ul
          className="
            flex flex-col gap-6 text-white font-semibold
            text-[20px] sm:text-[26px]
          "
        >
          <li>
            <NavLink to="/" onClick={() => setOpen(false)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogo" onClick={() => setOpen(false)}>
              Catálogo
            </NavLink>
          </li>
          <li>
            <NavLink to="/fichas" onClick={() => setOpen(false)}>
              Fichas
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" onClick={() => setOpen(false)}>
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
