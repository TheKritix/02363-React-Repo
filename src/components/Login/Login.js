import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { SettingsBackupRestoreOutlined } from "@mui/icons-material";
import { Link, useNavigate } from 'react-router-dom'
/*inspiration for line with text: https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle
 * Inspiration for forms: https://www.w3schools.com/html/html_form_input_types.asp
 *Inspiration to login token: https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications?fbclid=IwAR2y4l2yBvpOauFUEiDdHZho_a-fYX0bwlhNwei_j4iIm-fq3EVRsf3vJ5s
 */

  // Fetch request that sends the users Email and password to the database to check if a user exists
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

    const navigate = useNavigate()

    const handleLoginToken = async e => {
        e.preventDefault();
        const token = await loginUser({
            email, 
            password
        });
      console.log(token);
      setToken(token);
      setUserId(token);
      navigate("/profilepage");
      navigate(0);
    } 

    const [login, setLogin] = useState([
      {
        email: "",
        password: "",
      },
    ]);


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

     
<Link to="/registerPage">
        <button className="regBtn">
          Create an account
        </button>
      </Link>

    </div>
  );

};

Login.propTypes = {
    setToken: PropTypes.func.isRequired 
};
