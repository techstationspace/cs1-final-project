import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import SidebarMenu from "./SidebarMenu";

import DashboardPage from "../pages/DashboardPage";
import TopicsPage from "../pages/TopicsPage";
import CoursesPage from "../pages/CoursesPage";

const routes = [
  {
    name: "dashboard",
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    name: "courses",
    path: "/courses",
    component: CoursesPage,
  },
  {
    name: "topics",
    path: "/topics",
    component: TopicsPage,
  },
];

function AppView() {
  return (
    <Router>
      <Grid container spacing={0}>
        <Grid item md={3} lg={3} xl={4}>
          <SidebarMenu routes={routes} />
        </Grid>
        <Grid item >
          <Switch>
            {routes.map((route, i) => (
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
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default AppView;
