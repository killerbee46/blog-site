import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { menus } from "./Navbar";
import { Link } from "react-router-dom";
import LoginHandler from "./LoginHandler";
import { Divider } from "@mui/material";

export default function MenuDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menus.map((text, index) => (
          <Link to={text?.path} key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={text?.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Divider />
        <ListItem >
          <LoginHandler />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="block lg:hidden">
      <i
        onClick={toggleDrawer(true)}
        className="fa-solid fa-bars text-white text-lg cursor-pointer"
      ></i>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
