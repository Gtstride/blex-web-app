import React from 'react'
import logo_text from "../../assets/img/image.png";
import logo2 from "../../assets/img/logo-only.png"


const NavBar = () => {
  return (
     <div className="container main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="/"><img src={logo2} alt="FlyBoxConsult" height="40px" /></a><br/>
            <a href="/"><img src={logo_text} alt="FlyBoxConsult" height="30px"/></a>
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

              {/* <li className="menu-has-children text-white">
                <Link to="#/" className="disabled">Work</Link>
                <ul>
                  <li><Link to="/work_in_lithuania">Work in Lithuania</Link></li>
                  <li><Link to="/work_in_germany"> Work in Germany</Link></li>
                </ul>
              </li>*/}
              {/* <li><a href="/ticketing">Buy Your Ticket</a></li>  */}
              <li><a href="/contact-us">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
  )
}
export default NavBar
