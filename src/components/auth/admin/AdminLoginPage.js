import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { LoginFormStyle } from "../../../styles/AdminLoginFormStyle"
import { withRouter } from "react-router";
import Swal from 'sweetalert2'

import { httpPostWithNoToken } from '../../../helpers/api'
// import AdminLogOut from "./AdminLogOut"
// import logo from "../../assets/img/logo-b.png"

const AdminLoginPage = () => {
  const history = useHistory();

  const [submitting, setSubmitting] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const clearForm = () => {
    setInputValues({
      ...inputValues,
      password: "",
      email: "",
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      // setLoading(true);

      const data = {
        email: inputValues.email,
        password: inputValues.password,
      };
      const response = await httpPostWithNoToken("login", data);
      console.log(response);
      console.log(data);
      Swal.fire({
        title: "Successful 😀",
        text: `${"You have successfully logged in as"} ${data.email} ${"& as a super admin"}`,
        // type: "success",
      });
      // localStorage.setItem("token", data.response)
      // localStorage.setItem("user", JSON.stringify(response.user));

      history.push('/admin-dash_board');

      // console.log(response);
      // console.log(data.response)
      setSubmitting(false);
      clearForm();
      // setLoading(false);
    } catch (error) {

      console.log(error)
      Swal.fire({
        title: "Sorry 😞",
        text: error.message,
      });
      // setLoading(false);
      setSubmitting(false);
      // clearForm();
    }
  };

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
                  <form onSubmit={handleSubmit} className="form-group">
                    <div className="row">
                      <input
                        type="email"
                        name="email"
                        // id="username"
                        className="form__input"
                        placeholder="Enter Email"
                        value={inputValues.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="password"
                        // type={passwordShown ? "text" : "password"}
                        name="password"
                        // id="password"
                        className="form__input"
                        placeholder="Enter Password"
                        value={inputValues.password}
                        onChange={handleChange}
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
                      <button type={submitting} defaultValue="Submit" className="btn">SIGN IN</button>
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

export default withRouter(AdminLoginPage);