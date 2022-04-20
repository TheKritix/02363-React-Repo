import React, { Component } from "react";
import "./Login.css";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { First } from "react-bootstrap/esm/PageItem";
/*inspiration for line with text: https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle
 *https://www.freecodecamp.org/news/how-to-use-react-icons/
 *
 */

export const Login = () => {
    const [login, setLogin] = useState([
        {
        email: "",
        Password: ""
        }
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
          fetch("http://localhost:3001/api/login", {
              method: "GET",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
              },
              body: new URLSearchParams ({
                email: `${login.email}`,
                password:`${login.password}`
              }),
          }).then(()=> {
              console.log("email and password sendt to API")
          });
      }
  };

  return (
    <div className="inputLogin">
      <h1 id="headlineLogin">Sign in</h1>
      <form  onSubmit={submitLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={login.email}
          onChange={handleLogin}
        ></input>
        <br />
        <input
          type="password"
          name="passWord"
          placeholder="Password"
          required
          value={login.password}
          onChange={handleLogin}
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
export default Login;
