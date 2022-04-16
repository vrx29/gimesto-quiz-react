import { createContext, ReactNode, useContext, useState } from "react";

type ThemeProviderType = {
  theme: string;
  setTheme: (value: string) => void;
};

const ThemeContext = createContext<ThemeProviderType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
