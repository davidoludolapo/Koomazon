import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

import {useState} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')


    const signIn = async (event) => {
      event.preventDefault()
      try {
        const user=  await signInWithEmailAndPassword(auth, email, password) 
        console.log(user);
        if (user) {
            navigate('/')
        }
      } catch (error) {
        alert(error.message)
      }
    }

    const register = async (event) => {
     event.preventDefault()
      try {
        const user=  await createUserWithEmailAndPassword(auth, email, password) 
        console.log(user);
        if (user) {
            navigate('/')
        }
      } catch (error) {
        alert(error.message)
      }
        // e.preventDefault()
        // .createUserWithEmailAndPassword(auth, email, password)
        // .then((auth)=>{
        //   console.log(auth);
        // })   
        // .catch(error => alert(error.message))
    }
  return (
    <>
      <div className="login">
        <Link to="/">
          <h1 className="login__logo">Koomazon</h1>
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={(event) => setemail(event.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>

                <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
            </form>
            <p>By continuing, you agree to Koomazons Conditions of Use and Privacy Notice.</p>
            <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
        </div>
      </div>
    </>
  );
}

export default Login;
