import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "../RouteSchema";
import { Grid, makeStyles, } from "@material-ui/core";
import SidebarMenu from "./SidebarMenu";

const styleLink = makeStyles({

  sidebarGrid: {
    backgroundColor: "#CDCDCD"
    /*  boxShadow:"5px 7px 7px #aaaaaa" */
  },
  switchGrid: {
    marginLeft: "1rem"
  },
  button: {
    background: 'gray',
    margin: "0.5rem",
    color: 'white',
    height: 50,
    padding: '0 30px',
  },
  vh: {
    height: "100%",
    position: "fixed"

  }
});

function AppView() {
  const classes = styleLink();

  return (
    <Router >
      <Grid alignContent="stretch" className={classes.vh} container spacing={0}>
        <Grid className={classes.sidebarGrid} item md={2} lg={2} xl={2}>
          <SidebarMenu routes={Routes} />
        </Grid>
        <Grid className={classes.switchGrid} item md>
          <Switch >
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
