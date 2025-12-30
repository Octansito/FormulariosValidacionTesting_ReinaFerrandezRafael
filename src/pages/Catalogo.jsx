import { useState, useMemo } from "react";
import FilterSection from "../components/FilterSection";
import animales from "../data/animales";
import PetList from "../components/PetList";
import SearchBar from "../components/SearchBar";

function Catalogo() {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  //Se emplea useMemo para memorizar la lista filtrada. Al no ser un array plano, se filtra cada sección
  const animalesFiltrados = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      return animales;
    }
    const filtrar = (lista) =>
      lista.filter((a) => `${a.nombre} ${a.raza}`.toLowerCase().includes(term));
    return {
      perros: filtrar(animales.perros),
      gatos: filtrar(animales.gatos),
      adoptados: filtrar(animales.adoptados),
    };
  }, [searchTerm]);

  return (
    <>
      <header className="w-full mb-4">
        <h1 className="font-poppins font-semibold text-[36px] text-center text-[var(--colorprimary)] mt-6 mb-2">
          Nuestros animales en adopción 🐾
        </h1>
      </header>
      {/*Búsqueda*/}
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar por nombre, raza..."
      />
      {/*Filtros + Catálogo*/}
      <section aria-label="Catálogo de animales" role="main" className="mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros */}
          <section
            aria-label="Filtros de búsqueda"
            className="w-full bg-[var(--colorwhite)] border-2 border-[var(--colorprimary)] rounded-xl shadow-md p-6 h-fit mx-auto lg:mx-0 lg:sticky lg:top-8 lg:max-w-[260px] lg:min-w-[200px]"
          >
            <FilterSection />
          </section>

          {/* CATÁLOGO */}
          <section
            aria-label="Listado de animales en adopción"
            className="flex-1 overflow-y-auto max-h-[75vh] pb-6 pr-6 pl-6"
          >
            <PetList animales={animalesFiltrados} />
          </section>
        </div>
      </section>
    </>
  );
}

export default Catalogo;
