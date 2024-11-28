import Logo from "./Logo";
import MenuNav from "./MenuNav";
import BotonTheme from "./BotonTheme";
import { useTheme } from "../../logic/ThemeContext";

function Header() {
  const { theme } = useTheme();
  return (
    <header className="top-cab">
      <div className={`cab ${theme === "light" ? "cab-light" : "cab-dark"}`}>
        <Logo />
        <MenuNav />
        <div className="mode mode-header">
          <BotonTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
