import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";

function SidebarMenu({ routes }) {
  return (
    <List>
      {routes.map((route, idx) => (
        <ListItem key={idx}>
          <Link to={`${route.path}`}>{route.name}</Link>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarMenu;
