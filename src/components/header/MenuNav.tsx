import React from "react";
import { useTheme } from "../../logic/ThemeContext";

const MenuNav: React.FC = () => {
  const { theme } = useTheme();

  return (
    <nav className={`menu ${theme === "light" ? "menu-light" : "menu-dark"}`}>
      <ul>
        <li>Nosotros</li>
        <li>Características</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default MenuNav;
