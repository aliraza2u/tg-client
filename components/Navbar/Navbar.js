import React, { useState } from "react";
import styles from "./navbar.module.scss";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  makeStyles,
  InputBase,
} from "@material-ui/core";
import { Menu, Search, SearchRounded } from "@material-ui/icons";
import Sidebar from "../Sidebar";
import {NavbarRoute} from "../../utils/data";

const Navbar = () => {
  const [showSidebar, setSidebar] = useState(false);
  const closeSidebar = () => {
    setSidebar(false);
  };

  const classes = useStyles();
  return (
    <div>
      <AppBar className={styles.navbar_wrap} position="sticky" color="none">
        <Toolbar>
          {/* Sidebar Menu */}
          <IconButton
            color="inherit"
            className={classes.sectionMobile}
            onClick={() => setSidebar(!showSidebar)}
          >
            <Menu />
          </IconButton>

          {/* Navbar Branding */}
          <div className={styles.typography}>
            <Typography variant="h6" className="typography">
              Tahaif Ghar
            </Typography>
          </div>

          {/* Search Bar */}
          <div className={styles.search_wrap}>
            <InputBase placeholder="Search…" className={styles.search_field} />
            <Search className={styles.search_bar} />
          </div>

          {/* Appbar Routes */}
          {NavbarRoute?.map((x, index) => {
            return (
              <div className={classes.sectionDesktop}>
                <Button color="inherit" href={x.href}>
                  {x.name}
                </Button>
              </div>
            );
          })}
        </Toolbar>
      </AppBar>

      {/* Send props to sidebar component */}
      {<Sidebar open={showSidebar} onClose={closeSidebar} />}
    </div>
  );
};

export default Navbar;

const useStyles = makeStyles((theme) => ({
  //Use material ui break points. hide appbar items on small screen
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  //hide Menu icon on large screen
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
}));
