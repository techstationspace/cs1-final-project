import React, { useState, Children } from "react";
import { Grid, Button, TextField, makeStyles } from "@material-ui/core";

export default function TopicsPage() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <h1>Topics Page</h1>
        </Grid>
        <Grid item>
          <Button className="custom-button">new exercise</Button>
          <Button className="custom-button">new argument</Button>
          <Button className="custom-button">new topic</Button>
        </Grid>
      </Grid>
    </>
  );
}
