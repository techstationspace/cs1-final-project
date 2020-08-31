import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


// SEVERAL TEXT FIELDS FOR FORM



const formStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

 function FormPropsTextFieldsFilled() {
  const classes = formStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      {/* <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
          style={{width: 700}}
        />        
      </div> */}
      <TextField
          id="filled-full-width"
          label="Required"
          style={{ margin: 3 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      
    </form>
  );
}
function FormPropsTextFieldsMultiline() {
  const classes = formStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      {/* <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
          style={{width: 700}}
        />        
      </div> */}
      <TextField
          id="filled-multiline-static"
          label="Required"
          multiline
          fullWidth
          rows={4}
          placeholder="Placeholder"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />      
    </form>
  );
}
function FormPropsNumber() {
  const classes = formStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
     <TextField
          id="filled-number"
          label="Number"
          type="number"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
    </form>
  );
}



// DATE-TIME MODEL
function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>      
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          style={{marginTop: 8}}
        />     
    </MuiPickersUtilsProvider>
  );
}





// GRID COMPONENT


const useStyle = makeStyles((theme) => ({
  container: {
    display: 'grid',
    background: "white",
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

function CSSGrid() {
  const classes = useStyle();

  return (
    <div>
      {/* <Typography variant="subtitle1" gutterBottom>
        Material-UI Grid:
      </Typography> */}
      <Grid container spacing={3} style={{ backgroundColor: "white", width: 800, margin: 0}}>
        <Grid item xs={12} >
          <Typography>Title</Typography>
          <FormPropsTextFieldsFilled></FormPropsTextFieldsFilled>
        </Grid>
        <Grid item xs={12}>
        <Typography>Description</Typography>
        <FormPropsTextFieldsMultiline></FormPropsTextFieldsMultiline>
        </Grid>
        <Grid item xs={5}>
        <Typography>Duration in hours</Typography>
        <FormPropsNumber></FormPropsNumber>
        </Grid>
        <Grid item xs={7}>
        <Typography>Start date</Typography>
        <MaterialUIPickers></MaterialUIPickers>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
      </Grid>
      {/* <Divider className={classes.divider} />
      <Typography variant="subtitle1" gutterBottom>
        CSS Grid Layout:
      </Typography>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 3' }}>
          <Paper className={classes.paper}>xs=3</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 8' }}>
          <Paper className={classes.paper}>xs=8</Paper>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Paper className={classes.paper}>xs=4</Paper>
        </div>
      </div> */}
      
    </div>
  );
}


// MAIN EXPORT COMPONENT

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <CSSGrid></CSSGrid>
      </Modal>
    </div>
  );
}


