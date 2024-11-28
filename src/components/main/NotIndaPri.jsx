import { fechaFormateada } from "../../logic/Fecha";
import { useTheme } from "../../logic/ThemeContext";

function NotIndPri() {
  const { theme } = useTheme();
  return (
    <div className="not-1">
      <p>{fechaFormateada}</p>
      <p className={`not-tit ${theme === "light" ? "not-tit-light" : "not-tit-dark"}`}>
        Conecta't, la nueva aplicación para los vecinos de san salvador para su
        seguridad y su beneficio personal
      </p>
      <p className="not-in-text">
        El Palau d'Esports Catalunya i el pavelló de Campclar tornaran a vibrar
        amb aquesta competició els dies 6, 7 i 8 de desembre
      </p>
      <img src="./img1.png" />
    </div>
  );
}
export default NotIndPri;
