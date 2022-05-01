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
                    About us
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="tos" to="/tos">
                    Terms of Service
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="tradecon" to="/tradecondition">
                    Trade Condition
                  </Link>
                </li>
              </ul>
            </article>
            <article className="footer-article">
              <h2 className="footer-title">MY ACCOUNT</h2>
              <ul className="footer-ul">
                <li className="list-item">
                  {" "}
                  <Link className="profile" to="/profilepage">
                    Profile
                  </Link>
                </li>
                <li className="list-item">
                  {" "}
                  <Link className="favorites" to="/">
                    Favorites
                  </Link>
                </li>
                <li className="list-item">
                  {" "}
                  <Link className="notifications" to="/">
                    Notifications
                  </Link>
                </li>
              </ul>
            </article>
            <article className="footer-article">
              <h2 className="footer-title">MICHELLINAOUS</h2>
              <ul className="footer-ul">
                <li className="list-item">
                  {" "}
                  <Link className="buy" to="/buy">
                    Buy
                  </Link>
                </li>
                <li className="list-item">
                  {" "}
                  <Link className="sell" to="/sell">
                    Sell
                  </Link>
                </li>
                <li className="list-item">
                  {" "}
                  <Link className="homepage" to="/">
                    Homepage
                  </Link>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default Footer;
