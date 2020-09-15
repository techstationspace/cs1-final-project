import React, { useState, Children } from "react";
import { Grid, Button, TextField, makeStyles } from "@material-ui/core";
import ButtonNavBar from "../components/ButtonNavBar";



export default function TopicsPage() {


  return (
    <>
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <Grid item >  <h1>Topics  Page</h1> </Grid>
        <Grid item >
        <ButtonNavBar > 
        NEW EXERCISE
  </ButtonNavBar>
        <ButtonNavBar > 
        NEW ARGUMENT
  </ButtonNavBar>
          <ButtonNavBar > 
        NEW TOPIC
  </ButtonNavBar>
   </Grid>
      </Grid>

    </>
  );
}