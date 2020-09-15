import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ButtonNavBar from "../components/ButtonNavBar";

export default function CourseTemplatesPage() {

return (
  <>
    <Grid container direction="row" alignItems="center" justify="space-between" >
      <Grid item >  <h1>Course templates Page</h1> </Grid>
      <Grid item >
      <ButtonNavBar > 
      NEW TEMPLATE
</ButtonNavBar>  </Grid>
    </Grid>
  </>
);
}