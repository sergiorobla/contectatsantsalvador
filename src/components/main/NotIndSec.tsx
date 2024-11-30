import React from "react";
import { fechaFormateada } from "../../logic/Fecha";
import { useTheme } from "../../logic/ThemeContext";

const NotIndSec: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="not-secundarias">
      <p>{fechaFormateada}</p>
      <p
        className={`not-tit ${
          theme === "light" ? "not-tit-light" : "not-tit-dark"
        }`}
      >
        Conecta't, la nueva aplicación para los vecinos de San Salvador para su
        seguridad y su beneficio personal
      </p>
      <p className="not-in-text-sec">
        Conecta't, la nueva aplicación para los vecinos de San Salvador para su
        seguridad y su beneficio personal
      </p>
    </div>
  );
};

export default NotIndSec;
