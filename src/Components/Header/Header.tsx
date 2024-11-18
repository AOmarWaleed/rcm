import { Typography, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { drawerWidth } from "../../Utils/Constant";

import { useNavigate } from "react-router-dom";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

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

interface HeaderProps {
  open: boolean;
  setOpen: (nextS: boolean) => void;
}

export default function Header({ open, setOpen }: HeaderProps) {
  const navigateTo = useNavigate();

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
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => navigateTo("/")}
          variant="h6"
          noWrap
          component="div"
        >
          LOGO
        </Typography>

        {/* ! todo :- add avatar and logOut Btn  */}
        {/* <Button sx={ { ml : "auto" } } color="white">LogOut</Button> */}
        <ThemeToggleButton sx={ { ml:"auto" } } />
      </Toolbar>
    </AppBar>
  );
}
