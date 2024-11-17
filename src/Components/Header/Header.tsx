import { Typography, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../Utils/Constant";
import { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {  ThemeContext } from "../../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open", // Prevent forwarding 'open' prop to DOM
})<AppBarProps>(({ theme, open }) => ({
  // !!!!!!! 
  // backgroundColor : theme.palette.primary.main ,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigateTo = useNavigate()
  const themeContext = useContext(ThemeContext!);
  if (!themeContext) {
    return <>there is noe theme go check it</>; 
  }

  const { mode, toggleTheme } = themeContext; // Destructure the values safely

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }), // Hide button when drawer is open
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography sx={{ cursor:"pointer" }} onClick={()=> navigateTo('/')} variant="h6" noWrap component="div">
          LOGO
        </Typography>

        {/* ! todo :- add avatar and logOut Btn  */}
        {/* <Button sx={ { ml : "auto" } } color="white">LogOut</Button> */}

        <IconButton onClick={toggleTheme} sx={ { ml : "auto" } }>
          {mode == "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
