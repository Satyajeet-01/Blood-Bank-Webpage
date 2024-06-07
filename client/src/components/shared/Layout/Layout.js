import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../../../styles/Layout.css";// Import your CSS file for styling

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main-content">
        <div className="row g-0">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">{children}</div>
        </div>
      </div>
    </>
  );
};
export default Layout;
