import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <div class="header" id="header">
        <div class="navigation">
          <div class="nav-center container d-flex">
            <Link to="/" class="logo">
              <h1>Resaclothing</h1>
            </Link>

            <ul class="nav-list d-flex">
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="shop" class="nav-link">
                  Shop
                </Link>
              </li>

              <li class="nav-item">
                <Link to="about" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="contact" class="nav-link">
                  Contact
                </Link>
              </li>
              <li class="icons d-flex">
                {/* <Link to='wishlist' class="icon">
                  <i class="bx bx-heart"></i>
                  <span class="d-flex">0</span>
                </Link>
                <Link to="cart" class="icon">
                  <i class="bx bx-cart"></i>
                  <span class="d-flex">0</span>
                </Link> */}
              </li>
            </ul>

            <div class="icons d-flex">
              <Link to="wishlist" class="icon">
              <FaRegHeart />
                <span class="d-flex">0</span>
              </Link>
              <Link to="cart" class="icon">
              <FaShoppingCart />
                <span class="d-flex">0</span>
              </Link>
            </div>
             {/* 
            <div class="hamburger">
              <i class="bx bx-menu-alt-left"></i>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
