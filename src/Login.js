import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import {useState} from 'react'

function Login() {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
    }
    const register = e => {
        e.preventDefault()
    }
  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://www.pngfind.com/pngs/m/56-565024_amazon-logo-png-amazon-png-transparent-png.png"
            alt=""
          />
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setemail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
        </div>
      </div>
    </>
  );
}

export default Login;
