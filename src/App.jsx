import "./App.css";
import Header from "./components/header/header.jsx";
import Index from "./components/main/Index.jsx";
import AvisoLegal from "./components/footer/AvisoLegal.jsx";
import Privacidad from "./components/footer/Privacidad.jsx";
import Cartellera from "./templates/CarteleraPage.tsx";
import Footer from "./components/footer/footer.jsx";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./logic/ThemeContext.jsx";
import { EventProvider } from "./context/EventContext";


function App() {
  const { theme } = useTheme();

  return (
		<EventProvider>
			<div
				className={`fullPage ${
					theme === "light" ? "fullPage-light" : "fullPage-dark"
				}`}
			>
				<Header />
				<div className="global-main">
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/avisolegal" element={<AvisoLegal />} />
						<Route path="/privacidad" element={<Privacidad />} />
						<Route path="/cartelera" element={<Cartellera />} />
					</Routes>
					<Footer />
				</div>
			</div>
		</EventProvider>
	);
}

export default App;
