// src/utils/theme.ts
import { createTheme } from "@mui/material/styles";

// Function to create theme based on mode (light/dark)
export const createCustomTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#eee" : "#121212",
        paper: mode === "light" ? "#f5f5f5" : "#1d1d1d",
      },
      loadingBg:  mode === "light" ? "#eeeeee55" : "#12121255",
    },
  });
};
