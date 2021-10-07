import React from 'react'
import xp1 from "../../assets/img/learn.jpg"
import xp2 from "../../assets/img/xp2.jpg"
import xp3 from "../../assets/img/xp3.jpg"
import xp4 from "../../assets/img/xp4.jpg"
import { Link } from 'react-router-dom'

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
                <Link to="#"="index.html">Home </=>{" "}
                <span className="lnr lnr-arrow-right" />{" "}
                <Link to="#"="courses.html"> Popular Courses</=>
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
                  <Link to="#" onClick={(e) => { e.preventDefault() }}><h4>Learn All About Studying Abroad Opportunities</h4></Link>
                  <p>The opportunities that comes with studying abroad is enumerable, our professional team, is always on ground to guide you through</p>
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
                  <Link to="#" onClick={(e) => { e.preventDefault() }}>
                    <h4>Learn About Our Education Package</h4>
                  </Link>
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
                      <span className="lnr lnr-bubble" />35</p>
                    <h4></h4>
                  </div> */}
                </div>
                <div className="details">
                  <Link to="#" onClick={(e) => { e.preventDefault() }}> <h4>Learn About Our Different Study Packages</h4></Link>
                  <p>Get Information on how to secure your admission abroad seemlessly in UK, US, Canada and Australia</p>
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
                  <Link to="#" onClick={(e) => { e.preventDefault() }}>
                    <h4>All You Need to Know About Studying Abroad</h4>
                  </Link>
                  <p>
                    Our team of professionals are on ground to guid you through on a step-by-step process of 
                    securing that admission in your dream school abroad. 
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
                  <Link to="#" onClick={(e) => { e.preventDefault() }}>
                    <h4>Learn How to Get that Course Abroad</h4>
                  </Link>
                  <p>
                    All you need to know about gaining admission into a school abroad with no prior background in a particular course
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
