import { Button } from '@material-ui/core';
import React from 'react'
import {auth,provider} from './firebase'

import './Login.css'



function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
      };
    return (
        <div className="container-fluid" >
                  <Button onClick={signIn} variant="contained" style={{backgroundColor:'blue'}} size="medium">
          SIGNIN WITH GOOGLE
        </Button>

              
        </div>
    )
}

export default Login
