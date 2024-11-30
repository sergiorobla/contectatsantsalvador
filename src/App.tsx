import React from 'react';
import "./App.css";
import Header from "./components/header/header";
import Index from "./components/main/Index";
import AvisoLegal from "./components/footer/AvisoLegal";
import Privacidad from "./components/footer/Privacidad";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./logic/ThemeContext";

// Componente principal de la aplicación
function App() {
  const { theme } = useTheme();

  return (
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
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;