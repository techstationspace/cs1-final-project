import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";

export default function CourseTemplatesPage() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <h1>Course templates Page</h1>
        </Grid>
        <Grid item>
          <Button className="custom-button">NEW TEMPLATE</Button>
        </Grid>
      </Grid>
    </>
  );
}
