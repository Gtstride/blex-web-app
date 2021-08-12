import React from 'react'
import logo from "../../assets/img/logo-b.png"


const NavBar = () => {
  return (
    <div>
      <div className="container main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="/"><img src={logo} alt="" height="40px" /></a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About</a></li>

              <li className="menu-has-children text-white">
                <a href="#/" className="disabled">Education</a>
                <ul>
                  <li><a href="/study_in_uk">Study in UK</a></li>
                  <li><a href="/study_in_us">Study in US</a></li>
                  <li><a href="/study_in_canada">Study in Canada</a></li>
                  <li><a href="/study_in_australia">Study in Australia</a></li>
                </ul>
              </li>

              <li className="menu-has-children text-white">
                <a href="#/" className="disabled">Work</a>
                <ul>
                  <li><a href="/work_in_lithuania">Work in Lithuania</a></li>
                  <li><a href="/work_in_germany"> Work in Germany</a></li>
                </ul>
              </li>
              <li><a href="/contact-us">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default NavBar
