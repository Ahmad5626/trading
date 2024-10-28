import React from "react";

const Navbar = () => {
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
              <div class="menu-close-btn">
                <i class="bi bi-x-lg"></i>
              </div>
            </div>
            <ul class="menu-list">
              <li class="menu-item-has-children">
                <a href="index.html" class="drop-down active">
                  Home
                </a>
              </li>
              <li class="menu-item-has-children">
                <a href="trades.html" class="drop-down ">
                  Trade
                </a>
              </li>
              <li>
                <a href="page/plans.html">Pricing</a>
              </li>
              <li>
                <a href="page/features.html">Features</a>
              </li>
              <li>
                <a href="page/faq.html">FAQ</a>
              </li>
              <li>
                <a href="contact.html" class="">
                  Contact
                </a>
              </li>
            </ul>

            <a
              href="login.html"
              class="i-btn btn--md d-xl-none d-flex capsuled btn--primary"
            >
              Sign In
            </a>
          </div>

          <div class="nav-right">
           

            <a
              href="login.html"
              class="i-btn btn--md d-xl-flex d-none capsuled btn--primary-outline"
            >
              Sign In
            </a>

            <div class="sidebar-btn d-xl-none d-flex">
              <i class="bi bi-list"></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
