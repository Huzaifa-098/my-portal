import React, { useState } from "react";
import { FaRegChartBar, FaTh, FaBars, FaThList } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidenav.css";
const Sidenav = (children) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dash",
      name: <b>Dashboard</b>,
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: <b>About</b>,
      icon: <FaRegChartBar />,
    },
    {
      path: "/prod",
      name: <b>Product</b>,
      icon: <FaThList />,
    },
  ];
  return (
    <div>
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>

          {/* <div className="bars">
            <FaBars />
          </div> */}
        </div>
        <div className="move">
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default Sidenav;
