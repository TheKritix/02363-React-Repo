import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <section className="footer-section">
            <article className="footer-article">
              <h2 className="footer-title">INFORMATION</h2>
              <ul className="footer-ul">
                <li className="list-item">
                  <Link className="about-us" to="/about-us">
                    <text className="about-us text">About us</text>
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="tos" to="/tos">
                    <text className="tos-text">Terms of Service</text>
                  </Link>
                </li>
                <li className="list-item">PLACEHOLDER</li>
                <li className="list-item">PLACEHOLDER</li>
              </ul>
            </article>
            <article className="footer-article">
              <h2 className="footer-title">MY ACCOUNT</h2>
              <ul className="footer-ul">
                <li className="list-item">PLACEHOLDER</li>
                <li className="list-item">PLACEHOLDER</li>
                <li className="list-item">PLACEHOLDER</li>
                <li className="list-item">PLACEHOLDER</li>
              </ul>
            </article>
            <article className="footer-article">
              <h2 className="footer-title">MICHELANOUS</h2>
              <ul className="footer-ul">
                <li className="list-item">PLACEHOLDER</li>
                <li className="list-item">PLACEHOLDER</li>
                <li className="list-item">PLACEHOLDER</li>
                <li className="list-item">PLACEHOLDER</li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default Footer;
