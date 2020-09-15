import React, { useState, Children } from "react";
import nextId from "react-id-generator";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    background: 'gray',
    margin: "0.2rem",
    color: 'white',
    height: 47,
    padding: '0 10px',

  }
});

export default function ButtoNavBar({children}) {
  const classesButton = useStyles();

  return (
    <>
      <Button className={classesButton.button}> {/* onClick={() => setOpenLateralView(true)} >  */}
        {children}
      </Button>

    </>
  )
}