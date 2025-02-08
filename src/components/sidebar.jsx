import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";





function Sidebar(params) {
  return (
    <>
     <div className="d-flex">
      <div className="sidebar bg-light mt-5" style={{ width: '', height: '200vh'}}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link fs-2 text-dark" to="/Home" aria-disabled>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fs-2 text-secondary" to="/products">
              <MdDashboardCustomize />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fs-2 text-secondary" to="/User">
              <LuUsers />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fs-2 text-secondary" to="/Cart"><TiShoppingCart />
            </NavLink>
          </li>
         
        </ul>
      </div>
    </div>
    </>
  );
}

export default Sidebar;
