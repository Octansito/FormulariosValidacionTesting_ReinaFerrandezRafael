import NavigationBar from "./NavigationBar";
import Logo from "../assets/Logo5.png";

function Header() {
  return (
    <header className="bg-[var(--colorprimary)] w-full relative" role="banner">
      <div className="max-w-7xl mx-auto px-6 h-[45px] sm:h-[60px] lg:h-[90px] flex items-center justify-between">
        {/* Logo + nombre
           - MÓVIL: a la derecha
           - TABLET/ESCRITORIO: a la izquierda
        */}
        <div className="flex items-center gap-2 order-2 md:order-1">
          <img
            src={Logo}
            alt="Logo Pawpets"
            className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] lg:w-[90px] lg:h-[90px]"
          />
          <h1 className="font-heading-h1 text-white">PawPets</h1>
        </div>

        {/* NavigationBar
           - MÓVIL: a la izquierda (hamburguesa)
           - TABLET/ESCRITORIO: a la derecha (links)
        */}
        <div className="order-1 md:order-2">
          <NavigationBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
