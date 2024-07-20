import { createContext } from "react";

export const ThemeContext = createContext({
  theme: false,
  themeChange: () => {},
});

export const ThemeProvider = ThemeContext.Provider;
