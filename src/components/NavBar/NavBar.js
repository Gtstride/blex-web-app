import React from 'react'
// import logo from "../../assets/img/logo-b.png"
import { Link } from 'react-router-dom';
import logo2 from "../../assets/img/fly-box.png"


const NavBar = () => {
  return (
    <div>
      <div className="container main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="/"><img src={logo2} alt="" height="40px" /></a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li><a href="/">Home</a></li>
              <li><Link to="/about-us">About</Link></li>

              <li className="menu-has-children text-white">
                <Link to="#/" className="disabled">Education</Link>
                <ul>
                  <li><Link to="/study_in_uk">Study in UK</Link></li>
                  {/* <li><Link to={location => ({ ...location, pathname: "/about-us" })}>Link</Link></li> */}
                  <li><Link to="/study_in_us">Study in US</Link></li>
                  <li><Link to="/study_in_canada">Study in Canada</Link></li>
                  <li><Link to="/study_in_australia">Study in Australia</Link></li>
                </ul>
              </li>

              {/* <li className="menu-has-children text-white">
                <Link to="#/" className="disabled">Work</Link>
                <ul>
                  <li><Link to="/work_in_lithuania">Work in Lithuania</Link></li>
                  <li><Link to="/work_in_germany"> Work in Germany</Link></li>
                </ul>
              </li> */}
              {/* <li><Link to="/ticketing">Buy Your Ticket</Link></li> */}
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default NavBar
