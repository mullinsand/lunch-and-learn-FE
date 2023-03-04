import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from 'react-router-dom';

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'grey'
};

const Navbar = ({currentUser, handleLogout}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link style={linkStyle} to={`/`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link style={linkStyle} to={`/register`}>
                {currentUser.name ? "" : "Register"}
            </Link>
          </li>
          <li className="nav-item">
            <Link style={linkStyle} to={`/login`}>
            {currentUser.name ? "" : "Login"}
            </Link>
          </li>
          <li className="nav-item">
            <Link style={linkStyle} >
              {currentUser.name && `Logged in as ${currentUser.name}`}
            </Link>
          </li>
          <li className="nav-item">
            <Link style={linkStyle} to={"/favorites"}>
              {currentUser.name && "Favorites"}
            </Link>
          </li>
          <li className="nav-item">
            <Link style={linkStyle} to={`/`} onClick={handleLogout}>
              {currentUser.name && "Logout"}
            </Link>
          </li>

          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;