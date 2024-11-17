import { styled  } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      
      <Header setOpen={setOpen} open={open} />
      <SideBar DrawerHeader={DrawerHeader} open={open} setOpen={setOpen} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* !!!!! to be under the header  */}
        <DrawerHeader />

        <Outlet />
      </Box>
    </Box>
  );
}
