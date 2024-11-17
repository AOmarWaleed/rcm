import {
  createContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface ThemeContextProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">(
    prefersDarkMode && localStorage.getItem("mode") == "dark" ? "dark" : "light"
  );

  const ref = useRef(false);
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
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          background: {
            default: mode === "light" ? "#eee" : "#121212",
            paper: mode === "light" ? "#f5f5f5" : "#1d1d1d",
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
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
