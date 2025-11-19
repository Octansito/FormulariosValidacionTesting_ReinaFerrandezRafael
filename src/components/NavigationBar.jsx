import { useState } from "react";
import Logo from "../assets/Logo5.png";
import menuIcon from "../assets/menu.png";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  // Estado del menú hamburguesa
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0C3C34] w-full relative">
      {/* NAV BAR PRINCIPAL */}
      <nav className="w-full flex items-center justify-between px-6 h-[90px]">
        {/* Botón Hamburguesa (solo móvil) */}
        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden bg-transparent border-none p-0 m-0 outline-none transition-transform duration-200 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          <img src={menuIcon} alt="Menú" className="h-10 w-10" />
        </button>

        {/* LOGO CENTRADO */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <img src={Logo} alt="Logo Pawpets" className="w-[100px] h-[100px]" />

          <span className="font-poppins font-bold text-[32px] text-white hidden sm:block">
            PawPets
          </span>
        </div>

        {/* BOTONES DE ESCRITORIO */}
        <div className="hidden lg:flex gap-3 ml-auto">
          <NavLink to="/" className="text-white hover:underline">
            Inicio
          </NavLink>
          <NavLink to="/catalogo" className="text-white hover:underline">
            Catálogo
          </NavLink>
          <NavLink to="/fichas" className="text-white hover:underline">
            Fichas
          </NavLink>
          <NavLink to="/admin" className="text-white hover:underline">
            Admin
          </NavLink>
        </div>
      </nav>

      {/* MENÚ MÓVIL */}
      <nav
        id="mobile-menu"
        className={`${
          open ? "block" : "hidden"
        } lg:hidden bg-[#0C3C34] px-6 py-4`}
      >
        <ul className="flex flex-col gap-4 text-white text-lg">
          <li>
            <NavLink to="/" onClick={() => setOpen(false)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogo" onClick={() => setOpen(false)}>
              Catalogo
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
