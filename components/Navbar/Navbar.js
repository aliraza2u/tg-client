import React from "react";
import styles from "./navbar.module.scss";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  AppBar,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Menu, Search } from "@material-ui/icons";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={styles.navbar}>
        <Toolbar>
          <IconButton className={classes.sectionMobile}>
            <Menu />
          </IconButton>

          <Typography
            variant="h6"
            className="typography"
            className={styles.typography}
          >
            Tahaif Ghar
          </Typography>

          <div className={styles.search_wrap}>
            <Search className={styles.search_bar} />
            <TextField className={styles.search_field} />
          </div>

          <div className={classes.sectionDesktop}>
            <Button href="" color="inherit">
              Home
            </Button>
            <Button href="">About</Button>
            <Button href="">Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
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
