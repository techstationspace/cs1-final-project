import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "../RouteSchema";
import { Grid } from "@material-ui/core";
import SidebarMenu from "./SidebarMenu";

function AppView() {
  return (
    <Router>
      <Grid container spacing={0}>
        <Grid item md={3} lg={3} xl={4}>
          <SidebarMenu routes={Routes} />
        </Grid>
        <Grid item md>
          <Switch>
            {Routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export default AppView;
