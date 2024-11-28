import MenuLat from "./MenuLat";
import NotIndSec from "./NotIndSec";
import NotIndPri from "./NotIndaPri";
import { useTheme } from "../../logic/ThemeContext";

function PrimeraParteIndex() {
  const { theme } = useTheme();
  const imgSrc = theme === "light" ? "./img3.png" : "./img2.png";
  return (
    <>
      <div className={`in`}>
        <div
          className={`not-in ${
            theme === "light" ? "not-in-light" : "not-in-dark"
          }`}
        >
          <h1
            className={` ${theme === "light" ? "h1-in-light" : "h1-in-dark"}`}
          >
            Noticias
          </h1>
          <div className="grp-not">
            <NotIndPri />
            <div className="not-sec">
              <NotIndSec />
              <NotIndSec />
              <NotIndSec />
              <button
                className={`but-in ${
                  theme === "light" ? "but-in-light" : "but-in-dark"
                }`}
              >
                Ver mas Noticias
              </button>
            </div>
          </div>
        </div>
        <MenuLat />
      </div>
      <img
        style={{ width: "100%", position: "relative", top: "5px" }}
        src={imgSrc}
        alt="Tema actual"
      />
    </>
  );
}
export default PrimeraParteIndex;
