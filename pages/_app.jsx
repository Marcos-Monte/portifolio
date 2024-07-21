import Head from "next/head";

import Header from "./Components/Header";

import "@/styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "./services/Themes";

export default function App({ Component, pageProps }) {
  // Para onde a bolinha do botão de troca de temas irá deslizar
  const rightMode = "rightSlipButton";
  const leftMode = "leftSlipButton";

  // Váriavel de Estado (Deslizamento do Botão)
  const [slipButton, setSlipButton] = useState(false);

  // As duas classes de estilos
  const lightMode = "light";
  const darkMode = "dark";

  // Váriavel de Estado (Tema)
  const [theme, setTheme] = useState(true);

  // Função ao ser ativada alterna seu valor entre 'false e true'
  function handleThemeChange() {
    setSlipButton(!slipButton);
    setTheme(!theme);
  }

  return (
    <>
      <Head>
        <meta name="description" content="Portifólio de Marcos Monte" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marcos Monte</title>
      </Head>

      <ThemeProvider value={{ theme, handleThemeChange }}>
        <div className={theme ? darkMode : lightMode}>
          <Header
            funcao={handleThemeChange}
            styleButton={slipButton ? rightMode : leftMode}
          />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
