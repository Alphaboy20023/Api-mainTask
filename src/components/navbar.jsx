import React from "react";
import { NavLink } from "react-router-dom";
// import { PiXBold } from "react-icons/pi";
// import { FiMenu } from "react-icons/fi";
// import { FaUserCircle } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
// import Sidebar from "./sidebar";


   const Navbar = () => { 
   return ( 
      <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-sm" style={{ height: "65px", zIndex: "999" }}>
        <div className="container-fluid">
          <span className="navbar-brand text-secondary fs-3 fw-semibold">
            <span className="text-primary">Get</span>Change
          </span>
          <div className="ms-auto">
            <div className="dropdown"> 
              <button
                className="btn btn-outline-secondary dropdown-toggle d-flex align-items-center"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ minWidth: "120px" }}
              >
                <span className="d-none d-md-inline">Hi, Victor</span>
                <span className="d-inline d-md-none">
                  <i className="bi bi-person-fill"></i> Hi, victor
                </span>
              </button>

              
              <ul
                className="dropdown-menu dropdown-menu-end mt-0"
                aria-labelledby="userDropdown"
                style={{
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderTop: 'none',
                  marginTop: '0'
                }}
              >
                <li>
                  <NavLink className=" bg-white text-body-tertiary dropdown-item py-2" to="">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item py-2 bg-white text-body-tertiary" to="">
                    Settings
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item py-2 text-danger" to="/">
                    <CgLogOut className="me-2" /> Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      );
   

}
export default Navbar;
