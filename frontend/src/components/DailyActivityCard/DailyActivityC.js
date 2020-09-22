import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import LensIcon from "@material-ui/icons/Lens";
import ExtensionIcon from "@material-ui/icons/Extension";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
let lessiontitle = `Lession Title`;
let lessiondescription = `Truncation should be conditionally applicable on this long line of text
  as this is a much longer line than what the container can support. `;

function SimpleCard() {
  return (
    
      <Grid container>
        <Grid
          container
          item
          direction="row"
          justify="space-between"
          alignItems="center"
          xs={2}
        >
          <Grid item xs={12} spacing={1}>
            <p>10.00</p>
          </Grid>
          <Grid item xs={12} spacing={1}>
            <p>1h</p>
          </Grid>
        </Grid>

        <Grid container item xs={6} style={{ padding: 5 }}>
          <Grid container item direction="row" justify="space-between">
            <Grid item xs={10}>
              <Typography variant="h5" component="h2">
                {lessiontitle}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <ReportProblemIcon />
            </Grid>
            <Grid item>
              <Typography style={{ padding: 5 }} variant="body2" component="p">
                {lessiondescription}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={4}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography>Difficulty</Typography>
            </Grid>
            <Grid item xs={6}>
              <LensIcon />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={4}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <p>1</p>
            </Grid>
            <Grid item xs={6}>
              <MenuBookIcon />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={4}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <p>2</p>
            </Grid>
            <Grid item xs={6}>
              <ExtensionIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
   
  );
}

export default SimpleCard;
