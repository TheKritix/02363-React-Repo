import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { SettingsBackupRestoreOutlined } from "@mui/icons-material";
/*inspiration for line with text: https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle
 *https://www.freecodecamp.org/news/how-to-use-react-icons/
 *
 */

 async function loginUser(credentials) {
     return fetch("https://stoodle.bhsi.xyz/api/login", {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(credentials)
     })
     .then(data => data.json())
 }


export default function Login({ setToken, setUserId }) {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handleLoginToken = async e => {
        e.preventDefault();
        const token = await loginUser({
            email, 
            password
        });
      console.log(token);
      setToken(token);
      setUserId(token)
    } 

    const [login, setLogin] = useState([
      {
        email: "",
        password: "",
      },
    ]);


    const logout = () => {
      sessionStorage.removeItem(token)
    };

    const handleLogin = (e) => {
      setLogin({
          ...login,
          [e.target.name]:e.target.value,
      });
  };

  return (
    <div className="inputLogin">
      <h1 id="headlineLogin">Sign in</h1>
      <form  onSubmit={handleLoginToken}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value = {login.email}
          onChange={ e => setEmail(e.target.value)}
        ></input>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value = {login.password}
          onChange={e => setPassword(e.target.value)}
          
        ></input>
        <br />
        <input type="submit" value="Login"></input>
      </form>
      <div>
        <h3 id="forgotPassword">Forgot Password?</h3>
      </div>

      <h4 id="lineText">or</h4>

      <button
        className="regBtn"
        onClick={(event) => (window.location.href = "/registerpage")}
      >
        {" "}
        Create an account
      </button>
      <br />
      <br />

      <Button
        className="googleBtn"
        variant="outlined"
        style={{ borderRadius: 40, height: 44 }}
        startIcon={<GoogleIcon />}
      >
        Continue with Google
      </Button>
    </div>
  );

};

Login.propTypes = {
    setToken: PropTypes.func.isRequired 
};


  