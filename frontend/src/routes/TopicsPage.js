import React from "react";
import { Grid, Button} from "@material-ui/core";

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
          <Button style={{margin:"1em", color: "white", backgroundColor: "#874399" }} className="custom-button">new exercise</Button>
          <Button style={{margin:"1em", color: "white", backgroundColor: "#874399" }} className="custom-button">new argument</Button>
          <Button style={{margin:"1em", color: "white", backgroundColor: "#874399" }} className="custom-button">new topic</Button>
        </Grid>
      </Grid>
    </>
  );
}
