import React,{useState, useEffect,} from "react";
import { Button, makeStyles, withStyles } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

//STYLES---------------------------------------------------
const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      border: `1px solid ${theme.palette.divider}`,
      flexWrap: 'wrap',
    },
    divider: {
      margin: theme.spacing(1, 0.5),
    },
    shape: {
      borderRadius: "200px !important"}
  }));
  
  const StyledToggleButton = withStyles((theme) => ({
    root: {
      fontFamily: 'Arial',
      fontSize: '0.8rem',
      lineHeight: '20px',
      letterSpacing: '0.25px',
      color: 'rgba(60, 60, 60, 0.87)',
      margin: "2px !important",
      padding: '0.1rem 0.3rem',
      border: "1px solid gray !important",
      textTransform: 'none',
      width: '100%',
      '&$selected': {
        /* backgroundColor: 'rgba(33, 137, 214, 0.14)', */
        color: 'white',
        /* fontWeight: 'bold', */
        textShadow: "0px 0px 3px #FF8E53",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        '&:hover': {
          backgroundColor: 'rgba(33, 137, 214, 0.14)',
          color: 'rgb(26, 88, 159)',
        },
      },
      '&:not(:first-child)': {
        borderRadius: "10px", //bordo tondeggiante
      },
      '&:first-child': {
        borderRadius: theme.shape.borderRadius, //bordo spigoloso
      },
    },
    selected: {
  },
  }))(ToggleButton);


//FUNCTION COMPONENT---------------------------------------------------

const ButtonFilter = ({selectedTopicsEx, onSubmit}) => {

  const classes = useStyles() //Importa gli stili sopra

  const [selectedTopics, setSelectedTopics] = useState(() => selectedTopicsEx || [])
  const handleSelectedTopics = (event, newSelectedTopics) => setSelectedTopics(newSelectedTopics)

  function createToggleButtons(topicsArray) {
    return topicsArray.map(element => {
      console.log(element);
      return <StyledToggleButton className={classes.buttons}  variant="contained" color="secondary" key={element} value={element}>{element}</StyledToggleButton>
    }); 
  } 

  useEffect(() => {
    console.log(`This is useEffect after render->  ${selectedTopics}`) //Per ottenere qualcosa quando lo stato di selectedTopics cambia
  }, [selectedTopics])

  const topicsArray = ["HTML", "CSS", "JS", "BOOTSTRAP", "BASH", "REACT", "SOFT SKILL"]  
  useEffect(() => {//Qui inserire la richiesta GET che viene eseguita al "componentDidMount" per formare topicsArray oppure ad ogni change?
  }, [])

  return (
  <div>
      <ToggleButtonGroup size="small" className={classes.root} value={selectedTopics} onChange={handleSelectedTopics}>
        {createToggleButtons(topicsArray)}
      </ToggleButtonGroup>
      <br></br>
      <Button className={classes.divider} variant="contained" color="secondary" onClick={() => console.log(selectedTopics)}>LEGGI DATI BUTTONS FIGLIO</Button>
      <Button variant="contained" color="secondary" onClick={() => onSubmit(selectedTopics)}>INVIA DATI BUTTONS A PADRE</Button>
  </div>)
}

export default ButtonFilter