import Head from "next/head";

import Header from "./Components/Header";

import "@/styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "./services/Themes";

export default function App({ Component, pageProps }) {
  const lightMode = "light";
  const darkMode = "dark";

  const [theme, setTheme] = useState(darkMode);

  function handleThemeChange() {
    // console.log(theme);
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
          <Header funcao={handleThemeChange} />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
