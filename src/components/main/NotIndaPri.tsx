import React from "react"; // Import React
import { fechaFormateada } from "../../logic/Fecha";
import { useTheme } from "../../logic/ThemeContext";

function NotIndPri(): JSX.Element { // Specify return type as JSX.Element
  const { theme } = useTheme();

  return (
    <div className="not-1">
      <p>{fechaFormateada}</p>
      <p className={`not-tit ${theme === "light" ? "not-tit-light" : "not-tit-dark"}`}>
        Conecta't, la nueva aplicación para los vecinos de San Salvador para su
        seguridad y su beneficio personal
      </p>
      <p className="not-in-text">
        El Palau d'Esports Catalunya i el pavelló de Campclar tornaran a vibrar
        amb aquesta competició els dies 6, 7 i 8 de desembre
      </p>
      <img src="./img1.png" alt="Imagen destacada" /> {/* Added alt text for accessibility */}
    </div>
  );
}

export default NotIndPri;