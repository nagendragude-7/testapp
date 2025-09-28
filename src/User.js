// src/User.js
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // Get ID from URL

  return (
    <div>
      <h2>👤 User Profile</h2>
      <p>User ID from URL: <strong>{id}</strong></p>
    </div>
  );
}

export default User;
