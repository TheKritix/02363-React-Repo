import React, { Component } from "react";
import "./About-us.css";
import logo from "../Topbar/logoStoodle.png";

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="about-us-master">
          <div className="about-us-container">
            <h2 className="title">About us</h2>
            <p className="description">
              The intention of this website to create a platform where anyone is
              able to sell their university books of any kinds. It should be
              easy and convient to use this website.
            </p>
            <p className="description">
              This website has been created as part of a university project on
              DTU designed and developed by 6 students.
            </p>

            <p className="description">
              The purpose of creating this website is to get a general understanding
              of the React framework, and the markup languages including the programming
              language JavaScript.
            </p>
          </div>
          <div className="logo">
            <img className="logoimg" src={logo} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
