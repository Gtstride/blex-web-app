import React from 'react'
import FlyBoxFees from '../flyBoxFees/FlyBoxFee'

const Slider = () => {
  return (
    <div>
      <section className="banner-area relative" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row fullscreen d-flex align-items-center justify-content-between">
            <div className="banner-content col-lg-9 col-md-12">
              <h1 className="text-uppercase">
                Your dreams are valid
              </h1>
              <p className="pt-10 pb-10 text-white">
                <b className="text-white">
                  There is something here for everyone.
                </b>
              </p>
              <a href="/contact-us" className="primary-btn text-uppercase">
                Get In Touch
              </a>
              <FlyBoxFees className="our-fees primary-btn text-uppercase ml-5" />
            </div>
          </div>
        </div>
      </section>
      <section className="feature-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single-feature">
                <div className="title">
                  <h4>Enquire About Studying</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    Studying abroad, can be simple, budget friendly &amp; easy, with  over 50 Universities in USA,
                    Canada, Australia, &amp; UK that we are affiliated with, you can explore your options.
                    We are here to support your dream of schooling abroad. Our team of professionals are on standby to process your application.
                  </p>
                  <a href="/contact-us" style={{ textDecoration: "none" }}>Get More Information</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Slider
