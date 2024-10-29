import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
       <main>
        <div class="form-section white img-adjust">
            <div class="form-bg">
                <img src="https://gainbot.io/default/images/1920x1080" alt="Background image"/>
            </div>
            <div class="linear-center"></div>
            <div class="container-fluid px-0">
                <div class="row justify-content-center align-items-center gy-5">
                    <div class="col-xl-6 col-lg-6">
                        <div class="form-left">
                            <a href="index.html" class="logo" data-cursor="Home">
                                <img src="https://gainbot.io/assets/files/FEStVr9r2DrfajwT.png" alt="Logo"/>
                            </a>
                            <h1>Join Today &amp; Receive up to 100 USDT Bonus</h1>
                            <p> Embark on a journey with FinFunder, where innovation meets opportunity in the dynamic world of blockchain and cryptocurrency. As the market evolves with heightened interest and regulatory developments, position yourself for success with our advanced, secure platform. Begin your trading adventure with a welcome bonus! </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-8 col-sm-10 position-relative')}}'">
                        <div class="eth-icon">
                            <img src="default/images/450X450.html" alt="image"/>
                        </div>
                        <div class="bnb-icon">
                            <img src="default/images/450X450.html" alt="image"/>
                        </div>
                        <div class="ada-icon">
                            <img src="default/images/450X450.html" alt="image"/>
                        </div>
                        <div class="sol-icon">
                            <img src="default/images/450X450.html" alt="image"/>
                        </div>
                        <div class="form-wrapper2 login-form">
                            <h4 class="form-title">Sign Up Your Account</h4>
                            <form method="POST" action="">
                                <input type="hidden" name="_token" value="EhfO6qaw02t0QpZS4aPW84dZ3ub8q4G282EJAVxz" autocomplete="off"/>
                                
                                <div class="row">
                                    
                                    <div class="col-12">
                                        <div class="form-inner">
                                            <label for="name">Name</label>
                                            <input type="text" id="name" name="name" value="" placeholder="Enter Name" required/>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-inner">
                                            <label for="email">Email</label>
                                            <input type="email" id="email" name="email" value="" placeholder="Enter Email" required/>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-inner">
                                            <label for="password">Password</label>
                                            <input type="password" id="password" name="password" autocomplete="new-password" placeholder="Enter Password" required/>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-inner">
                                            <label for="password_confirmation">Confirm Password</label>
                                            <input type="password" id="password_confirmation" name="password_confirmation" autocomplete="new-password" placeholder="Enter Confirm Password" required/>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <button type="submit" value="Register" class="i-btn btn--lg btn--primary w-100">Sign Up</button>
                                    </div>
                                </div>
                                                                <div class="have-account">
                                    <p class="mb-0">Already registered? <Link to="/login"> Sign In</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
  )
}

export default Register
