import { useTheme } from "../../logic/ThemeContext";

function BotonTheme() {
  const { theme, handleThemeToggle } = useTheme();
  return (
    <div className="buttons-cab">
      <div onClick={handleThemeToggle}>
        <img
          src={theme === "light" ? "./moon.svg" : "./sun.svg"}
          alt={theme === "light" ? "Modo nocturno" : "Modo diurno"}
        />
      </div>
      <div>
        <img src="./user.svg" />
      </div>
    </div>
  );
}
export default BotonTheme;
