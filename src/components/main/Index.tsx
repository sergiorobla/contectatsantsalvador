import React from "react";
import PrimeraParteIndex from "./PrimeraParteIndex";
import Browser from "../header/Browser";
import { useTheme } from "../../logic/ThemeContext";

const Main: React.FC = () => {
  const { theme, handleThemeToggle } = useTheme();

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
      <PrimeraParteIndex />
    </main>
  );
};

export default Main;
