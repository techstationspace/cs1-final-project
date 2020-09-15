import React from "react";
import { Link } from "react-router-dom";
import {
  List, ListItem, makeStyles, ListItemAvatar, Avatar, ListItemIcon,
} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';


const styleLink = makeStyles({
  link: {
    color: "gray",
    textDecoration: "none",
    marginTop: "2rem",
    fontSize: "1rem"
  },
  fcList: {
    textDecoration: "none",
    fontSize: "1.5rem"
  }

});

function SetIconOrAvatar({ route, idx }) {
  if (idx == 0)
    return (
      <ListItemAvatar>

        <Avatar alt="img" src={process.env.PUBLIC_URL + "/img/dashboard.jpg"} />

      </ListItemAvatar>)

  else {
    return (
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>)
  }
}

function SidebarMenu({ routes }) {
  const classesLink = styleLink();


  return (
    <>
      <List className={classesLink.listItem} >

        {routes.map((route, idx) => (
          <ListItem key={idx}>

            <SetIconOrAvatar route={route} idx={idx} >
            </SetIconOrAvatar>

            <Link
              className={idx === 0 ? classesLink.fcList : classesLink.link} to={`${route.path}`}>{route.name}
            </Link>

          </ListItem>

        ))}

      </List>
    </>
  );
}

export default SidebarMenu;
