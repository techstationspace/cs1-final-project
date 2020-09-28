import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  Icon,
  makeStyles,
  ListItemAvatar,
  Avatar,
  Grid,
} from "@material-ui/core";

const styleLink = makeStyles({
  link: {
    color: "#666666",
    textDecoration: "none",
    marginTop: "1rem",
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
      <Link className={classesLink.link} to={`${route.path}`}>
        <Grid
          container
          direction="row"
          alignContent="center"
          wrap="nowrap"
          spacing={1}
        >
          <Grid item>
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
          </Grid>
          <Grid item>{route.name}</Grid>
        </Grid>
      </Link>
    </ListItem>
  );
}

export default SidebarMenu;
