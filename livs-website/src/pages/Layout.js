import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className="menu-link">Home</Link>
          </li>
          <li>
            <Link to="/blogs" className="menu-link">Blogs</Link>
          </li>
          <li>
            <Link to="/contact" className="menu-link">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  );
};

export default Layout;