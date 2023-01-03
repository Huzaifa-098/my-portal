import React from "react";
import Sidenav from "../component/Sidnav/Sidenav";
import Navbar from "../component/Navbar";
import Product from "../component/product/Product";
import { height } from "@mui/system";
const ProductList = () => {
  return (
    <div className="row">
      <div className="col-2" style={{ padding: "0" }}>
        <Sidenav></Sidenav>
      </div>
      <div className="col-10" style={{ padding: "0" }}>
        <Navbar></Navbar>
        <div className="row">
          <div className="col-2"></div>

          <div className="col-8">
            <Product></Product>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
