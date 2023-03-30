import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
//style
import "./style/dashboard.css";
const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
