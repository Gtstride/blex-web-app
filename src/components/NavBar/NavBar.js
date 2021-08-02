import React from 'react'
import logo from "../../assets/img/logo.png"


const NavBar = () => {
  return (
    <div>
      <div className="container main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="/"><img src={logo} alt="" title /></a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li><a href="/">Home</a></li>
              <li><a href="/about-us">About</a></li>

              <li className="menu-has-children">
                <a href onClick={(e) => { e.preventDefault() }}>Education</a>
                <ul>
                  <li><a href="/study_in_uk">Study in UK</a></li>
                  <li><a href="/study_in_us">Study in US</a></li>
                  <li> <a href="/study_in_canada">Study in Canada</a></li>
                  <li><a href="/study_in_aust">Study in Australia</a></li>
                </ul>
              </li>

              <li className="menu-has-children">
                <a href onClick={(e) => { e.preventDefault() }}>Work</a>
                <ul>
                  <li><a href="/work_in_uk">Work in UK</a></li>
                  <li><a href="/work_in_us"> Work in US</a></li>
                  <li><a href="/work_in_canada">Work in Canada</a></li>
                  <li><a href="/work_in_australia">Work in Australia</a></li>
                  <li className="menu-has-children"><a href onClick={(e) => { e.preventDefault() }}>Work Else Where </a>
                    <ul>
                      <li><a href="/work">Country Specific</a></li>
                      <li><a href="/work">Work Specific</a></li>
                    </ul>
                  </li>
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
