import React from 'react'
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                <ul>
                  <li><a href onClick={(e) => { e.preventDefault() }}><i className="fa fa-facebook" /></a></li>
                  <li><a href onClick={(e) => { e.preventDefault() }}><i className="fa fa-twitter" /></a></li>
                  <li><a href onClick={(e) => { e.preventDefault() }}><i className="fa fa-dribbble" /></a></li>
                  <li><a href onClick={(e) => { e.preventDefault() }}><i className="fa fa-behance" /></a> </li>
                </ul>
              </div>

              <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                <a href="tel:+953 012 3654 896">
                  <span className="lnr lnr-phone-handset" />{" "}
                  <span className="text">+234 705 7586 835</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <NavBar />
      </header>
    </div>
  )
}

export default Header
