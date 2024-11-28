import MenuBurguer from "./MenuBurguer";
import { Link } from "react-router-dom";
import { handleScrollToTop } from "../../logic/ScrollToTop";

function Logo() {
  return (
    <div className="logo-menu">
      <Link to="/">
        <div className="logo" onClick={handleScrollToTop}>
          <img src="/escudo.png" alt="Logo de la página" />
        </div>
      </Link>
      <MenuBurguer />
    </div>
  );
}
export default Logo;
