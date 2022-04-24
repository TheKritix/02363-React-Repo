import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
/*inspiration for line with text: https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle
 *https://www.freecodecamp.org/news/how-to-use-react-icons/
 *
 */

 async function loginUser(credentials) {
     return fetch("http://localhost:3001/api/logintoken", {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(credentials)
     })
     .then(data => data.json())
 }

 


export default function Login({ setToken }) {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handleLoginToken = async e => {
        e.preventDefault();
        const token = await loginUser({
            email, 
            password
        });
      setToken(token);
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

  const submitLogin = (e) => {
      e.preventDefault();
      const loginObject = {
          email: login.email,
          password: login.password
      };
      console.log(loginObject);
      if(
          !(loginObject.email === "" && loginObject.password === "") 
      )
      {
          fetch(`http://localhost:3001/api/login/${login.email}&${login.password}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                Accept: "application/json"
              },
             
          }).then(()=> {
              console.log("email and password sendt to API")
          });
      }
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
        <input type="submit" value="Login"  onClick={(event) => (window.location.href = "/profilepage")}></input>
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


  