//PS: Página obrigatóriamente precisa ficar fora do diretório 'pages'. Se ficar, vai gerar um erro.
// Nenhum arquivo que não 'exportar como padrão' (export default) um componente React, pode ficar dentro do diretório 'pages'

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
