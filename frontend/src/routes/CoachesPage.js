import React from "react";
import { Grid, Button } from "@material-ui/core";

export default function CoachesPage() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <h1>Coaches Page</h1>
        </Grid>
        <Grid item>
          <Button className="custom-button">NEW STUDENT</Button>
        </Grid>
      </Grid>
    </>
  );
}
