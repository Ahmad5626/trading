import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <main>
        <div class="form-section white img-adjust">
          <div class="linear-center"></div>
          <div class="form-bg2">
            <img
              src="https://gainbot.io/default/images/1920x1080"
              alt="Background image"
            />
          </div>
          <div class="container-fluid px-0">
            <div class="row justify-content-center align-items-center gy-5">
              <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 position-relative">
                <div class="eth-icon">
                  <img src="default/images/450X450.html" alt="image" />
                </div>
                <div class="bnb-icon">
                  <img src="default/images/450X450.html" alt="image" />
                </div>
                <div class="ada-icon">
                  <img src="default/images/450X450.html" alt="image" />
                </div>
                <div class="sol-icon">
                  <img src="default/images/450X450.html" alt="image" />
                </div>
                <div class="form-wrapper2">
                  <h4 class="form-title">Access Your Trading Hub</h4>
                  <form method="POST" action="">
                    <input
                      type="hidden"
                      name="_token"
                      value="EhfO6qaw02t0QpZS4aPW84dZ3ub8q4G282EJAVxz"
                      autocomplete="off"
                    />

                    <div class="row">
                      <div class="col-12">
                        <div class="form-inner">
                          <label for="email">Email</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value=""
                            placeholder="Enter Email"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-inner">
                          <label for="password">Password</label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value=""
                            autocomplete="current-password"
                            placeholder="Enter Password"
                            required
                          />
                        </div>
                      </div>
                      <div class="row mb-4">
                        <div class="col-sm-6">
                          <div class="form-inner mb-sm-0 mb-3">
                            <div class="form-group">
                              <input
                                type="checkbox"
                                id="remember_me"
                                name="remember"
                              />
                              <label for="remember_me">Remember me</label>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6 text-sm-end text-start d-flex justify-content-sm-end justify-content-start">
                          <div class="forgot-pass">
                            <a href="#">Forgot your password?</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="have-account">
                      <p class="mb-0">
                        Don&#039;t have an account?{" "}
                        <Link to="/register">Sign Up</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="form-left">
                  <a href="index.html" class="logo" data-cursor="Home">
                    <img
                      src="https://gainbot.io/assets/files/FEStVr9r2DrfajwT.png"
                      alt="Logo"
                    />
                  </a>
                  <h1>Step Into the World of Smart Trading</h1>
                  <p>
                    Enter the realm of FinFunder, where cutting-edge blockchain
                    technology meets seamless trading experiences. As the
                    industry evolves amidst global regulatory developments, stay
                    ahead with our secure, intuitive platform. Ready to make
                    your mark in the dynamic world of cryptocurrency?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
