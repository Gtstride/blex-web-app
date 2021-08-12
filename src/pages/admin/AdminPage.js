import React from "react";
import { LoginFormStyle } from "../../styles/AdminLoginFormStyle"
// import logo from "../../assets/img/logo-b.png"

const AdminLoginPage = () => {

  return (
    <>
      <LoginFormStyle>
        <section className="banner-area relative admin-login-banner" id="home">
          <div className="overlay admin-overlay-bg" />
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="about-content col-lg-12">
                <h1 className="text-white">ADMIN LOGIN</h1>
                <p className="text-white link-nav">
                  <a href="/">Home </a>{" "}
                  <span className="lnr lnr-arrow-right" />{" "}
                  <a href="/admin"> Admin Login</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid">
          <div className="row main-content bg-success text-center ">
            <div className="col-md-4 text-center company__info">
              <span>
                <h2>
                  {/* <img src={logo} alt="" style={{ height:"2em", width:"100%"}}/> */}
                </h2>
              </span>
              <h3 className="company_title text-white">Fly Box Consult</h3>
            </div>
            <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
              <div className="container-fluid">
                <div className="row">
                  <h2>Admin Login</h2>
                </div>
                <div className="row">
                  <form control className="form-group">
                    <div className="row">
                      <input
                        type="email"
                        name="email"
                        id="username"
                        className="form__input"
                        placeholder="Enter Email"
                      />
                    </div>
                    <div className="row">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form__input"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="row">
                      <input
                        type="checkbox"
                        name="remember_me"
                        id="remember_me"
                        className
                      />
                      <label htmlFor="remember_me">Remember Me!</label>
                    </div>
                    <div className="row">
                      <input type="submit" defaultValue="Submit" className="btn" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginFormStyle>
    </>
  );
};

export default AdminLoginPage;