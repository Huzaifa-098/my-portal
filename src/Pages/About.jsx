import React from "react";
import Sidenav from "../component/Sidnav/Sidenav";
import Navbar from "../component/Navbar";
import Highcharts from "../Pages/HiCharts/Highcharts";
export const About = () => {
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
            <Highcharts></Highcharts>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};
