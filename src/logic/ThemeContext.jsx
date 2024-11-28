import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Proveedor del contexto
export function ThemeProvider({ children }) {
  // Leer el tema desde localStorage o establecer el tema por defecto
  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  // Función para alternar el tema
  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Guardar el tema en localStorage
  };

  // Sincronización del tema con localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme); // Guardar el tema en localStorage cuando cambie
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para acceder al contexto
export function useTheme() {
  return useContext(ThemeContext);
}
