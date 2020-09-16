import React, { Children } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  Icon,
  makeStyles,
  ListItemAvatar,
  Avatar,
  ListItemIcon,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";

const styleLink = makeStyles({
  link: {
    color: "#666666",
    textDecoration: "none",
    marginTop: "2rem",
    fontSize: "1rem",
  },
  fcList: {
    color: "#191919",
    textDecoration: "none",
    fontSize: "1.5rem",
  },
  listItem: {
    backgroundColor: "#CDCDCD",
  },
});

function SidebarMenu({ routes }) {
  const classesLink = styleLink();
  return (
    <>
      <List className={classesLink.listItem}>
        {routes.map((route, idx) => (
          <Item key={idx} route={route} icon={route.icon} />
        ))}
      </List>
    </>
  );
}

function Item({ route, icon }) {
  const classesLink = styleLink();
  return (
    <ListItem>
      <Link className={classesLink.fcList} to={`${route.path}`}>
        {!!icon ? (
          <Icon>{icon}</Icon>
        ) : (
          <ListItemAvatar>
            <Avatar
              alt="img"
              src={process.env.PUBLIC_URL + "/img/dashboard.jpg"}
            />
          </ListItemAvatar>
        )}
        {route.name}
      </Link>
    </ListItem>
  );
}

export default SidebarMenu;
