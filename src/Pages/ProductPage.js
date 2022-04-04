import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Topbar from "../components/Topbar/Topbar.js";
import { ItemImage } from "../components/ProductPageComponents/ItemImage.js";
import ItemDescription from "../components/ProductPageComponents/ItemDescription.js";

function ProductPage() {
  return (
    <>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <div classname="rowA">
        <ItemImage />
      </div>
      <div className="rowB">
        <ItemDescription />
      </div>
    </>
  );
}
export default ProductPage;
