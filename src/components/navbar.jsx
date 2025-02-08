import React from "react";
import { NavLink } from "react-router-dom";
import { PiXBold } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
// import Sidebar from "./sidebar";


function Navbar(params) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" style={{ zIndex: "999", position:"fixed", width:"100%" }}>
        <div className="container-fluid" >
          <NavLink className="navbar-brand text-secondary fs-3 py-2" to=""><span className="fw-semibold">Get</span>Change</NavLink>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#top-navbar" aria-controls="top-navbar">
            <FiMenu />
          </button>
          <div className="offcanvas offcanvas-end d-flex" tabIndex="-1" id="top-navbar" aria-labelledby="top-navbar">
            <button className="navbar-toggler onlythis border-0 fs-1" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#top-navbar" aria-controls="top-navbar">
              <PiXBold />
            </button>
            <div className="d-flex justify-content-between ">
              <ul className="navbar-nav ms-lg-auto p-1">
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle mobilesrc fs-4 fw-semibold text-secondary" id="navbarDropdown" aria-current="page" data-bs-toggle="dropdown"
                    to=""><FaUserCircle /> Hi, Victor
                  </NavLink>
                  <ul className="dropdown-menu border-0 bg-light fs-3" aria-labelledby="navbarDropdown">
                    <li>
                      <NavLink className="dropdown-item bg-light text-secondary  fs-2" to="#nogo">Profile</NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item bg-light text-secondary fs-3" to="#nogo">Settings</NavLink>
                    </li>
                    <li className="nav-item px-2">
                      <NavLink className="nav-link text-secondary" to="/"><CgLogOut />  LogOut
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
