import React, { useState } from "react"
import {
  TextField,
  Grid,
  Button,
} from "@material-ui/core";

function Form({ data, onSubmit }) {
  const [correctPassword, setCorrectPassword] = useState(false);
  const [password,setPassword]= useState("")
  const [confPassword, setConfPassword]= useState("")


return(
<form onSubmit= {(event)=>{
  console.log(password);
  event.preventDefault();
}
}> 
<Grid container spacing={3}>
<Grid item>
  <TextField 
    name="password"
    label="Password"
    type="password"
    required
    onInput={(e)=>setPassword(e.target.value)}
    onChange ={(e) =>
      confPassword !== e.target.value
        ? setCorrectPassword(false)
        : setCorrectPassword(true)
    }
  />
</Grid>
<Grid item>
  <TextField
    error={!correctPassword}
    id="confirm-password"
    label="Confirm Password"
    type="password"
    required
    //onChange={(e)=>controlPassword(e)}
    onInput={(e)=>setConfPassword(e.target.value)}
    onChange={(e) =>
      password !== e.target.value
        ? setCorrectPassword(false)
        : setCorrectPassword(true)
    }
  />
</Grid>
</Grid>

<Button style={{marginTop: "2rem"}}
disabled={
  correctPassword === true 
    ? false
    : true
}
type="submit"
variant="outlined"
color="primary"
>
Send Form
</Button>
</form>
)
}
export default Form
