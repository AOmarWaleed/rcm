import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { drawerWidth } from "../../Utils/Constant";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import TaskAltSharpIcon from "@mui/icons-material/TaskAltSharp";
import { useNavigate } from "react-router-dom";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

//! PAGES
const ITEMS = [
  {
    text: "check eligibility",
    icon: <TaskAltSharpIcon />,
    path: "/check-eligibility",
  },
];

interface SideBarProps {
  open: boolean;
  setOpen: (nextS: boolean) => void;
  DrawerHeader: any;
}

export default function SideBar({ open, setOpen, DrawerHeader }: SideBarProps) {
  const navigateTo = useNavigate();
  const theme = useTheme();

  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer variant="permanent" open={open}>
      {/* !!! to be under the header ALWAYS |||| it's here and in the main layout */}
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {ITEMS.map(({ text, icon, path }) => (
          <ListItem
            onClick={() => {
              navigateTo(path);
              handleDrawerClose();
            }}
            key={text}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
