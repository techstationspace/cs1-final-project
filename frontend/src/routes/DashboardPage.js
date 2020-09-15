import React from "react";
import { Grid } from "@material-ui/core";
import { ListItemAvatar, Avatar} from "@material-ui/core";


export default function CoachesPage() {

  return (
    <>
      <Grid container direction="row" alignItems="center" justify="space-between" >
        <Grid item xs={7} >  </Grid>
        <Grid item >
        name
  </Grid>
  <Grid item >
          surname
          </Grid>
          <Grid style={{marginRight:"0.7rem"}}item >
          <ListItemAvatar>
        <Avatar alt="img" src={process.env.PUBLIC_URL + "/img/dashboard.jpg"} />
      </ListItemAvatar>
          </Grid>
      </Grid>
    </>
  );
}