import React from 'react';
import PrimeraParteIndex from "./PrimeraParteIndex";
import EventsPage from "./EventsPage.js";
import Browser from "../header/Browser";
import { useTheme } from "../../logic/ThemeContext";

// Optional: Define prop types if any
interface MainProps {
  // Add any props here if needed
}

const Main: React.FC<MainProps> = () => {
  const { theme } = useTheme();

  return (
      <main>
        <div
            className={`inicio-busc ${
                theme === "light" ? "inicio-busc-light" : "inicio-busc-dark"
            }`}
        >
          <h1>Conecta't</h1>
          <p>Te damos la Bienvenida al Barrio Sant Salvador</p>
          <Browser />
        </div>
        <EventsPage />
        <PrimeraParteIndex />
      </main>
  );
};

export default Main;