import React from "react";
import Sidenav from "../component/Sidnav/Sidenav";
import Navbar from "../component/Navbar";
import Table from "./table";
const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-2" style={{ padding: "0" }}>
        <Sidenav></Sidenav>
      </div>
      <div className="col-10" style={{ padding: "0" }}>
        <Navbar></Navbar>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-1" style={{ marginTop: "100px" }}>
            <h1>Admin</h1>
          </div>
          <div className="col-8">
            <Table></Table>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
