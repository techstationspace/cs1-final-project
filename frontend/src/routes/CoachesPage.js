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
        wrap="nowrap"
      >
        <Grid item xs={4} md={6}>
          <h1>Coaches Page</h1>
        </Grid>
        <Grid item style={{ marginRight: "1em" }}>
          <Button className="custom-button">NEW STUDENT</Button>
        </Grid>
      </Grid>
    </>
  );
}
