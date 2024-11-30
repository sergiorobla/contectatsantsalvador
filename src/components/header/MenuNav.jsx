import { useTheme } from "../../logic/ThemeContext";
import { Link } from "react-router-dom";


function MenuNav() {
  const { theme } = useTheme();
  return (
		<>
			<nav className={`menu ${theme === "light" ? "menu-light" : "menu-dark"}`}>
				<ul>
					<li>Nosotros</li>
					<li>
						<Link to="/cartelera">Cartelera</Link>
					</li>
					<li>Contacto</li>
				</ul>
			</nav>
		</>
	);
}
export default MenuNav;
