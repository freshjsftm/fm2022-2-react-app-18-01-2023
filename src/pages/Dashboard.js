import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
      <p>description common</p>
    </div>
  );
}

export default Dashboard;