import React from "react";
import { Grid } from "@material-ui/core";
import ButtonNavBar from "../components/ButtonNavBar";

export default function CoachesPage() {

  return (
    <>
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <Grid item >  <h1>Coaches Page</h1> </Grid>
        <Grid item >
        <ButtonNavBar > 
        NEW STUDENT
  </ButtonNavBar>  </Grid>
      </Grid>
    </>
  );
}