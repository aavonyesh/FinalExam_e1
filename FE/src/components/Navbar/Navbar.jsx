import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="container">
      <div className="container_content">
        <div className="logo">VEGEFOODS</div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/shop"}>SHOP</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/blog"}>BLOG</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT</Link>
            </li>
            <li>
              <Link to={"/basket"}>BASKET</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>WISHLIST</Link>
            </li>
            <li>
              <Link to={"/admin"}>ADMIN</Link>
            </li>
            <li>
              <Link to={"/add"}>ADD</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
