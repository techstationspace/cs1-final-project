import React, { Children } from "react";
import { Link } from "react-router-dom";
import {
  List, ListItem, makeStyles, ListItemAvatar, Avatar, ListItemIcon,
} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PersonIcon from '@material-ui/icons/Person';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';

const styleLink = makeStyles({
  link: {
    color: "#666666",
    textDecoration: "none",
    marginTop: "2rem",
    fontSize: "1rem"
  },
  fcList: {
    color: "#191919",
    textDecoration: "none",
    fontSize: "1.5rem"
  },
  listItem: {
    backgroundColor: "#CDCDCD"
  }
});

function ListRoute({ route }) {
  const classesLink = styleLink();
  return (
    <Link
      className={classesLink.fcList} to={`${route.path}`}>{route.name}
    </Link>)
}

function ListItemLink({ route, idx, children }) {
  const classesLink = styleLink();
  return (
    <ListItem key={idx}>
      <ListItemIcon>
        {children}
      </ListItemIcon>
      <ListRoute route={route} />
    </ListItem>
  )
}

function MyListItem({ route, idx }) {
  const classesLink = styleLink();
  switch (idx) {
    case 0:
      return (
        <ListItem key={idx}>
          <ListItemAvatar>
            <Avatar alt="img" src={process.env.PUBLIC_URL + "/img/dashboard.jpg"} />
          </ListItemAvatar>
          <ListRoute route={route} />
        </ListItem>)
    case 1:
      return (
        <ListItemLink route={route} idx={idx}>
          <LaptopChromebookIcon />
        </ListItemLink>)
    case 2:
      return (
        <ListItemLink route={route} idx={idx}>
          <MenuBookIcon />
        </ListItemLink>)
    case 3:
      return (
        <ListItemLink route={route} idx={idx}>
          <CollectionsBookmarkIcon />
        </ListItemLink>)
    case 4:
      return (
        <ListItemLink route={route} idx={idx}>
          <SupervisorAccountIcon />
        </ListItemLink>)
    case 5:
      return (
        <ListItemLink route={route} idx={idx}>
        <PersonIcon />
        </ListItemLink>)
  }
}

function SidebarMenu({ routes }) {
  const classesLink = styleLink();
  return (
    <>
      <List className={classesLink.listItem} >
        {routes.map((route, idx) => (
          <MyListItem route={route} idx={idx} />
        ))}
      </List>
    </>
  );
}

export default SidebarMenu;
