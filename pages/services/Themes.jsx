// Módulo de configuração de 'contexto'
import { createContext } from "react";

// Contruindo o contexto do Tema
export const ThemeContext = createContext({
  // Contexto vai receber dois valores: Theme = False e uma funçao para mudar o Theme
  theme: false,
  themeChange: () => {},
});

// Exportar variável 'ThemeProvider' com os módulos de Provides de dentro do createContext
export const ThemeProvider = ThemeContext.Provider;
