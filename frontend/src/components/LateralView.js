import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Typography, Grid, TextField }from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import Checkbox from '@material-ui/core/Checkbox';

import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';







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
          rows={2}
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



// TAGS FORM

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={topics}
      style={{width: "auto"}}      
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}      
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder="Favorites" />
      )}
    />
  );
}

const topics = [
  { title: 'HTML' },
  { title: 'CSS'},
  { title: 'React'},
  { title: 'Bootstrap'},
  { title: 'CDN' },
  { title: "JavaScript" },
  { title: 'Figma'},
  { title: 'Git'},
  { title: 'GitHub' },
  { title: 'MongoDB'},
  { title: 'Express'},
  { title: 'Axios'},
  { title: 'Node'},
  { title: 'Untagged'},
  { title: 'Pstman' }  
];


// GRID COMPONENT


function CSSGrid() {
  return (
    <div>    
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
        <Grid item xs={12}>
        <Typography>Topics</Typography>
        <CheckboxesTags></CheckboxesTags>
        </Grid>
       </Grid>         
    </div>
  );
}


// MAIN EXPORT COMPONENT

export default function SimpleModal() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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
        <CSSGrid/>
      </Modal>
    </div>
  );
}


