import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '80%',
        display:'flex',
        flexDirection:'column'
      },
    },
  }));
  
 function BasicTextFields() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Username" />
          <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </form>
      );
}

const Login = () => {

      
    return (
        <>
        <div>
            <div>Chatify</div>
            <div>Stay Connected with people while practicing social distancing !!</div>
            <div>Login</div>
            <div>
                    {BasicTextFields()}
                <div>
                    <button>Login</button>
                    <div>Don't have an account?</div>
                    <span><Link to="/signup">SignUp</Link></span>
                </div>
                <div></div>
            </div>
        </div> 
        </>
    )
}

export default Login
