import { Drawer } from "@material-ui/core";
import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { SidebarData } from "../../utils/data";
import styles from "./sidebar.module.scss";

const Sidebar = (props) => {
  const [openedItems, setOpenedItems] = useState({});

  const handleClick = (key) => {
    setOpenedItems({ ...openedItems, [key]: !openedItems[key] });
  };
  return (
    <div>
      <Drawer anchor="left" open={props.open} onClose={() => props.onClose()}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={styles.sidebar_list}
        >
          {SidebarData.map((x, index) => (
            <>
              <ListItem key={index} button onClick={() => handleClick(x.title)}>
                <ListItemIcon>{x.icon}</ListItemIcon>
                <ListItemText primary={x.title} />
                {x.subNav ? (
                  openedItems[x.title] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItem>
              {x.subNav && (
                <Collapse
                  in={openedItems[x.title]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {x.subNav?.map((sub) => (
                      <ListItem key={sub} button>
                        <ListItemIcon>{sub.icon}</ListItemIcon>
                        <ListItemText primary={sub.title} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
