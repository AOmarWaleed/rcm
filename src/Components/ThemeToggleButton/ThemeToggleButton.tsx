import { IconButton } from "@mui/material";
import { useThemeContext } from "../../Context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ThemeToggleButton({ sx }: { sx: any }) {
  const { mode, toggleTheme } = useThemeContext(); // Destructure the values safely

  return (
    <IconButton onClick={toggleTheme} sx={sx}>
      {mode == "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
