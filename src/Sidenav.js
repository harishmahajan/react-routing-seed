import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/Style.css';
const Sidenav = () => {
  return (
    <div>
        <span className="liwidth">
          <Link to="/">
            Home
          </Link>
        </span>
        |
        <span className="liwidth">
          <Link to="/about">
            About
          </Link>
        </span>
        |
        <span className="liwidth">
            <Link to="/signup">
                Signup   
            </Link>
        </span>
        |
        <span className="liwidth">
            <Link to="/login">
                Login   
            </Link>
        </span>
    </div>
  );
};

export default Sidenav;