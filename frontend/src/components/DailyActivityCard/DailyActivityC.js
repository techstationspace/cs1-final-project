import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import LensIcon from '@material-ui/icons/Lens';
import ExtensionIcon from '@material-ui/icons/Extension';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});




 function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
       <p>10.00</p>
       <br></br>
       <p>1h</p>
       
        <ReportProblemIcon />
    
        <Typography variant="h5" component="h2">
          Lession title
        </Typography>
        <Typography variant="body2" component="p">
          lession description.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Typography>Difficulty</Typography>
        <LensIcon  />
        <p>1</p>
        <MenuBookIcon/>
        <p>2</p>
        <ExtensionIcon />
      </CardContent>
    </Card>
  );
}

export default SimpleCard;
