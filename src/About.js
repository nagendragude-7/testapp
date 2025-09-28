import React from "react";
import { Outlet, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>ℹ️ About Page</h2>
      <Link to="dashboard">Go to Dashboard (Nested)</Link>
      <hr />
      {/* Nested route content renders here */}
      <Outlet />
    </div>
  );
}

export default About;
