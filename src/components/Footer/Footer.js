import React from 'react'
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  // useEffect(() => {
  //   alert('reload!')
  // }, [])
  let url="#";
  return (
    <div>
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Quick links</h4>
                <ul>
                  <li><a href="https://wa.link/x17s0b" target="_blank" rel="noreferrer"><Icon.Whatsapp size={36} color="green" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 footer-social">
              <div className="single-footer-widget">
                <h4>Visit Our Social Media</h4>
                <a href="https://www.facebook.com/TravelwithFlyBox" target="_blank" rel="noreferrer"><Icon.Facebook size={33} style={{ marginRight: "1.5em", }} /></a>
                <a href="https://www.instagram.com/fly.boxconsult/" target="_blank" rel="noreferrer"><Icon.Instagram size={30} style={{ marginRight: "1.5em", }} /></a>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Newsletter</h4>
                <p className="text-white">Stay up-to-date with our latest</p>
                <div id="mc_embed_signup">
                  <form target="_blank" action="#">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        name="EMAIL"
                        placeholder="Enter Email Address"
                        required
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit" disabled><span className="lnr lnr-arrow-right" /></button>
                      </div>
                      <div className="info" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom row align-items-center justify-content-between">
            <p className="footer-text m-0 col-lg-4 col-md-12">
            </p>
            <div className="col-lg-8 col-md-12 text-white footer-social">
              <h3 className="text-white">Legal</h3>
              <ul>
                <li>Privacy &amp; Cookie Policy</li>
                <li>Terms and Conditions</li>
                <li>Terms of Use</li> <br />
              </ul>
            </div>
            <a href={url} className="true cd-top text-replace js-cd-top" style={{textDecoration: "none", color: "white"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="70" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
              <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
              </svg> Back to the Top 
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer