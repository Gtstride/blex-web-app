import React from 'react'
import xp1 from "../../assets/img/learn.jpg"
import xp2 from "../../assets/img/xp2.jpg"
import xp3 from "../../assets/img/xp3.jpg"
import xp4 from "../../assets/img/xp4.jpg"

export default function PopularCourse() {
  return (
    <div>
      {/* <section className="banner-area relative about-banner" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Popular Courses</h1>
              <p className="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span className="lnr lnr-arrow-right" />{" "}
                <a href="courses.html"> Popular Courses</a>
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="popular-course-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-45 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-8">Some Hot Topics</h1>
                <p>There is no other better time to take that bold step other than now. <br />Continue reading to learn more about the most searched topics on google</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="active-popular-carusel">
              <div className="single-popular-carusel">
                <div className="thumb-wrap relative">
                  <div className="thumb relative">
                    <div className="overlay overlay-bg" />
                    <img className="img-fluid" src={xp1} alt="" />
                  </div>
                  {/* <div className="meta d-flex justify-content-between">
                    <p>
                      <span className="lnr lnr-users" /> 355{" "}
                      <span className="lnr lnr-bubble" />
                      35
                    </p>
                    <h4>$150</h4>
                  </div> */}
                </div>
                <div className="details">
                  <a href onClick={(e) => { e.preventDefault() }}><h4>Learn More About Relocating</h4></a>
                  <p>All you need to know, for a successful and seemless relocation, as a professional, student and how to relocate with your family</p>
                </div>
              </div>
              <div className="single-popular-carusel">
                <div className="thumb-wrap relative">
                  <div className="thumb relative">
                    <div className="overlay overlay-bg" />
                    <img className="img-fluid" src={xp2} alt="" />
                  </div>
                </div>
                <div className="details">
                  <a href onClick={(e) => { e.preventDefault() }}>
                    <h4>Learn About Our Education Package</h4>
                  </a>
                  <p>Get more Information on how to secure your dream admission</p>
                </div>
              </div>
              <div className="single-popular-carusel">
                <div className="thumb-wrap relative">
                  <div className="thumb relative">
                    <div className="overlay overlay-bg" />
                    <img className="img-fluid" src={xp3} alt="" />
                  </div>
                  {/* <div className="meta d-flex justify-content-between">
                    <p>
                      <span className="lnr lnr-users" /> 355{" "}
                      <span className="lnr lnr-bubble" />
                      35
                    </p>
                    <h4>$150</h4>
                  </div> */}
                </div>
                <div className="details">
                  <a href onClick={(e) => { e.preventDefault() }}> <h4>Learn About Our Work Package</h4></a>
                  <p>Get Information on how to secure your dream Job in any country of your choice </p>
                </div>
              </div>
              <div className="single-popular-carusel">
                <div className="thumb-wrap relative">
                  <div className="thumb relative">
                    <div className="overlay overlay-bg" />
                    <img className="img-fluid" src={xp4} alt="" />
                  </div>
                </div>
                <div className="details">
                  <a href onClick={(e) => { e.preventDefault() }}>
                    <h4>Learn About Work / Study</h4>
                  </a>
                  <p>
                    When television was young, there was a hugely popular show based
                    on the still popular fictional character
                  </p>
                </div>
              </div>
              <div className="single-popular-carusel">
                <div className="thumb-wrap relative">
                  <div className="thumb relative">
                    <div className="overlay overlay-bg" />
                    <img className="img-fluid" src={xp1} alt="" />
                  </div>
                </div>
                <div className="details">
                  <a href onClick={(e) => { e.preventDefault() }}>
                    <h4>Learn About Relocating With your Family</h4>
                  </a>
                  <p>
                    When television was young, there was a hugely popular show based
                    on the still popular fictional character
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
