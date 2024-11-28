import React, { useState } from "react";
import { useTheme } from "../../logic/ThemeContext";

function Browser() {
  const [searchText, setSearchText] = useState("");
  const { theme, handleThemeToggle } = useTheme();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <form className={`browser ${theme}`}>
      <input
        placeholder="Buscar"
        value={searchText}
        onChange={handleInputChange}
      />
      <span className="bt-browser">
        <img src="./magnifying-glass.svg" alt="Buscar" />
      </span>
      {searchText && (
        <span className="mark-x" onClick={clearSearch}>
          <img src="./x-mark.svg" alt="Limpiar búsqueda" />
        </span>
      )}
    </form>
  );
}

export default Browser;
