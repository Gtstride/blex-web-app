import React from 'react'
import * as Icon from 'react-bootstrap-icons';

// import MessageParser from '../Chatbot/MessageParser';
// import ActionProvider from '../Chatbot/ActionProvider'
// import FlexBoxFees from "../flyBoxFees/FlyBoxFee"
// import config from "../Chatbot/config"

const Footer = () => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  // useEffect(() => {
  //   alert('reload!')
  // }, [])

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
                <a href="https://www.facebook.com/TravelwithFlyBox" target="_blank" rel="noreferrer"><Icon.Facebook className="" size={33} style={{ marginRight: "1.5em", }} /></a>
                <a href="https://www.instagram.com/fly.boxconsult/" target="_blank" rel="noreferrer"><Icon.Instagram className="" size={30} style={{ marginRight: "1.5em", }} /></a>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h4>Newsletter</h4>
                <p className="text-white">Stay up-to-date with our latest</p>
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
                        // onFocus="this.placeholder = ''"
                        onBlur="this.placeholder = 'Enter Email Address '"
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

            {/* <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} onClick={() => hideChat()} /> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer