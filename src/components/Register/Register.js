import React, { Component } from "react";
import "./Register.css";
import { useState } from "react";

export const Register = () => {
  const [register, setRegister] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  ]);

  const handleRegistration = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    const registrationObject = {
      firstname: register.firstname,
      lastname: register.lastname,
      email: register.email,
      password: register.password,
    };
    
    console.log(registrationObject);
    if (
      !(registrationObject.email === "" && registrationObject.password === "")
    ) {
      fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams({
          firstname: `${register.firstname}`,
          lastname: `${register.lastname}`,
          email: `${register.email}`,
          password: `${register.password}`,
        }),
      }).then(() => {
        console.log("New user added");
      });
    }
  };

  return (
    <div className="registerInput">
      <h1 id="headlineRegister">Register</h1>
      <p id="description">Please fill in this form to create an account.</p>
      <form onSubmit={submitRegistration}>
        <input
          type="firstname"
          name="firstname"
          placeholder="First name"
          value={register.firstname}
          onChange={handleRegistration}
          required
        ></input>
        <br />
        <input
          type="lastname"
          name="lastname"
          placeholder="Last name"
          value={register.lastname}
          onChange={handleRegistration}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={register.email}
          onChange={handleRegistration}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          minLength="8"
          value={register.password}
          onChange={handleRegistration}
          required
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
