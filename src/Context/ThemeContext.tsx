import {
  createContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
  useRef,
  useContext,
} from "react";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createCustomTheme } from "../Utils/theme";

export interface ThemeContextProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const ref = useRef(false);

  const [mode, setMode] = useState<"light" | "dark">(
    // lw feh dark fe el local or byfdl kda
    prefersDarkMode || localStorage.getItem("mode") == "dark" ? "dark" : "light"
  );

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      return;
    }
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Memoize the theme to avoid unnecessary recalculations
  const theme = useMemo(()=> createCustomTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

// Custom Hook for easy usage of ThemeContext
export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }

  return context;
}

/*
HOW TO CUSTOMIZE IN THE COLORS IN DARK AND LIGHT MODE 
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open", // Prevent forwarding 'open' prop to DOM
})<AppBarProps>(({ theme, open }) => ({
  // !!!!!!! 
  backgroundColor : theme.palette.primary.main ,



   Memoize the theme to avoid unnecessary recalculations
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          primary: {
            main: mode == "light" ? "#09c" : "rgba(255 , 0 , 0)",
          },
  
*/
