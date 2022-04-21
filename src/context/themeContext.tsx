import { createContext, ReactNode, useContext, useState } from "react";

type ThemeProviderType = {
  theme: string;
  setTheme: (value: string) => void;
};

const ThemeContext = createContext<ThemeProviderType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [theme, setTheme] = useState<string>("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
