import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

// using class instead of function because I might use state.
class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="NavbarItems">
          <div className="nav-menu">
            {MenuItems.map((item, index) => {
              return (
                <Link key={index} className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="spacer"> </div>
      </>
    );
  }
}
export default Navbar;
