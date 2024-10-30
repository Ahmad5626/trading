import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  function showMenu(){
    document.getElementsByClassName("main-nav")[0].classList.toggle("show-menu");
  }
   
  

  
  return (
    <div>
      <header class="header-area style-1">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <div class="header-left">
            <button class="header-item-btn sidebar-btn d-lg-none d-block">
              <i class="bi bi-bars"></i>
            </button>

            <div class="header-logo">
              <a href="index.html">
                <img src="https://gainbot.io/assets/files/FEStVr9r2DrfajwT.png" alt="White Logo" />
              </a>
            </div>
          </div>

          <div class="main-nav">
            <div class="mobile-logo-area d-xl-none d-flex justify-content-between align-items-center">
              <div class="mobile-logo-wrap">
                <img src="https://gainbot.io/assets/files/FEStVr9r2DrfajwT.png" alt="White Logo" />
              </div>
              <div class="menu-close-btn" onClick={showMenu}>
                <i class="bi bi-x-lg"></i>
              </div>
            </div>
            <ul class="menu-list">
              <li class="menu-item-has-children">
             
            <Link className="active" to="/">
            Home
            </Link>
                
                
                 
              
             
              </li>
              <li class="menu-item-has-children">
              <Link to="/trade">  Trade</Link>
                
                
              </li>
            
              <li>

                <Link to="/features"> Features</Link>
                
               
              </li>
              <li>
               
                <Link to="/faq">FAQ</Link>
               
              </li>
              <li>
               <Link to="/contact"> Contact</Link>
                 
                
              </li>
            </ul>

            <a
              href=""
              class="i-btn btn--md d-xl-none d-flex capsuled btn--primary"
            >
            <Link to="/login">
              Sign In
              </Link>
            </a>
          </div>

          <div class="nav-right">
           

            <a
              href=""
              class="i-btn btn--md d-xl-flex d-none capsuled btn--primary-outline"
            >
             <Link to="/login">
              Sign In
              </Link>
            
            </a>

            <div class="sidebar-btn d-xl-none d-flex" onClick={showMenu}>
              <i class="bi bi-list"></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
