import { render } from "@testing-library/react";
import React from "react";
import "./HomePage.css";
import Categories from "../components/Homepage/Categories/Categories";
import About from "../components/Homepage/About";

function HomePage() {
  return (
    <>
      <Categories></Categories>
      <div>
        <div className="homePageDivider"></div>
        <About></About>
      </div>
    </>
  );
}
export default HomePage;
