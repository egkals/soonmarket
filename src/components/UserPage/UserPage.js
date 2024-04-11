import './UserPage.css';
import { Link } from 'react-router-dom';

import React, { useState } from 'react'; // useState를 추가


function UserPage() {
  return (
    <header>
      <div className="logo">
        <h1>Soon Market</h1>
      </div>
      <div className="profile">
        <img src="profile.jpg" alt="Profile" />
      </div>
      <div className="auth-links">
        <a href="/user/login">Login</a>
        <span> | </span>
        <a href="/user/singup">Sign UP</a>
      </div>
    </header>
  );
}

export default UserPage;
