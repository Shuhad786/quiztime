import React from 'react';
import styled from 'styled-components';
import {auth, provider} from './Firebase-config'
import { signInWithPopup } from "firebase/auth";
import { Navigate} from 'react-router-dom';

const Formstyled = styled.form`
  background-color: white;
  background-image: linear-gradient(rgb(31, 143, 137),white,rgb(31, 143, 137));
  width: 100vw;
  height: 100vh;
  color: black;
  font-weight: bold;
  font-size: x-large;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
` 

function Login({setIsAuth}) {

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      Navigate("/Main")
    })
  };
  
  return (
    <Formstyled>
        <form>
        <header style={{'textAlign': 'center', 'fontSize': '70px'}}>Login Page</header>
        <button
         onClick = {signIn} style={{'backgroundColor': 'whitesmoke', 'color': 'black', 'width': '200px'}}> Sign in with Google
        </button>
        </form>
    </Formstyled>
  )
}

export default Login