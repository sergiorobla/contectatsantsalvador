import { Link } from "react-router-dom";
import { handleScrollToTop } from "../../logic/ScrollToTop";
import { year } from "../../logic/Fecha";
import { useTheme } from "../../logic/ThemeContext";

function Footer() {
  const { theme } = useTheme();
  return (
    <>
      <footer className={`fot ${theme === "light" ? "fot-light" : "fot-dark"}`}>
        <div className="fot-logo">
          <img src="./escudo.png" />
        </div>
        <div className="enlaces">
          <Link to="/avisolegal" onClick={handleScrollToTop}>
            <p>Aviso legal</p>
          </Link>
          <Link to="/privacidad" onClick={handleScrollToTop}>
            <p>Privacidad y cookies</p>
          </Link>
          <p className="enlaces-copy">
            &copy; Conecta't {year} | Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
