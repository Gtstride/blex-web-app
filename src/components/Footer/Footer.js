import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Top Schools</h4>
                <ul>
                  <li><a href onClick={(e) => e.preventDefault()}>Top Ranking School</a></li>
                  <li><a href onClick={(e) => e.preventDefault()}>Top Reputable School</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Quick links</h4>
                <ul>
                  <li><a href onClick={(e) => e.preventDefault()}>Jobs</a></li>
                  <li><a href onClick={(e) => e.preventDefault()}>Schools</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Get Our Resources</h4>
                <ul>
                  <li><a href onClick={(e) => e.preventDefault()}>Guides</a></li>
                  <li><a href onClick={(e) => e.preventDefault()}>Research</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Newsletter</h4>
                <p>Stay up-to-date with our latest</p>
                <div className id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="EMAIL"
                        placeholder="Enter Email Address"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Email Address '"
                        required
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><span className="lnr lnr-arrow-right" /></button>
                      </div>
                      <div className="info" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom row align-items-center justify-content-between">
            <p className="footer-text m-0 col-lg-6 col-md-12">
              {/* Copyright © All rights reserved | Created By{" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com/" target="_blank">
                Ushriya-Tech
              </a> */}
            </p>
            <div className="col-lg-6 col-sm-12 footer-social">
              <a href onClick={(e) => e.preventDefault()}><i className="fa fa-facebook" /></a>
              <a href onClick={(e) => e.preventDefault()}><i className="fa fa-twitter" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer