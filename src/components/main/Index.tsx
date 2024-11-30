import { useState } from "react";
import React from "react";
import PrimeraParteIndex from "./PrimeraParteIndex";
import { useEvents } from "../../logic/CarteleraContext";
import EventsPage from "./EventsPage.js";
import { useTheme } from "../../logic/ThemeContext";
import SearchBar from "./searchBar.js";

// Optional: Define prop types if any
interface MainProps {
  // Add any props here if needed
}

const Main: React.FC<MainProps> = () => {
  const { events, setEvents } = useEvents();
  const [filterText, setFilterText] = useState("");
  const { theme } = useTheme();

  // Función de filtro
  const filteredEvents = events.filter((event) => {
    const matchesText =
      event.name.toLowerCase().includes(filterText.toLowerCase()) ||
      event.description.toLowerCase().includes(filterText.toLowerCase());
    return matchesText;
  });

  return (
    <main>
      <div
        className={`inicio-busc ${
          theme === "light" ? "inicio-busc-light" : "inicio-busc-dark"
        }`}
      >
        <h1>Conecta't</h1>
        <p>Te damos la Bienvenida al Barrio Sant Salvador</p>
        {/* Barra de búsqueda */}
        <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      </div>
      <EventsPage />
      <PrimeraParteIndex />
    </main>
  );
};

export default Main;
