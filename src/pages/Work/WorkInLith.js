import React from 'react'
import cat1 from "../../assets/img/blog/cat-widget1.jpg"
import cat2 from "../../assets/img/blog/cat-widget2.jpg"
import cat from "../../assets/img/blog/cat-widget3.jpg"


const WorkInLith = () => {
  return (
    <>
      <section className="banner-area relative lithanuia-blog-home-banner" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content blog-header-content col-lg-12">
              <h1 className="text-white">Work In Lithuania</h1>
              <p className="text-white">
                At the moment, we have open vacancies in: <br />
                <ul>
                  <li><span> i. Farming</span> <span> ii. Watering</span> <span> iii. Cleaning</span> <span> iv. Weeding </span> <span> v. Harvesting</span> <span>vi. Sorting &amp; packaging</span>, etc</li>
                  <li><span> Warehouse staff (loading/offloading, stocking, sorting), etc</span> </li>
                  <li> Kitchen: Cleaning, helping, cooking &amp; serving</li>
                  <li>Construction: With/without experience &amp; Driving jobs (driver license required)</li>
                </ul> <br />
              </p>
              <button onClick={(e) => e.preventDefault(e)} className="primary-btn ">
                TALK TO US ABOUT YOUR TRAVEL
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="top-category-widget-area pt-90 pb-90 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-cat-widget">
                <div className="content relative">
                  <div className="overlay overlay-bg" />
                  <a href onClick={(e) => { e.preventDefault() }}>
                    <div className="thumb">
                      <img
                        className="content-image img-fluid d-block mx-auto"
                        src={cat1}
                        alt=""
                      />
                    </div>
                    <div className="content-details">
                      <h4 className="content-title mx-auto text-uppercase">
                        Social life
                      </h4>
                      <span />
                      <p>Enjoy your social life together</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-cat-widget">
                <div className="content relative">
                  <div className="overlay overlay-bg" />
                  <a href onClick={(e) => { e.preventDefault() }}>
                    <div className="thumb">
                      <img
                        className="content-image img-fluid d-block mx-auto"
                        src={cat2}
                        alt=""
                      />
                    </div>
                    <div className="content-details">
                      <h4 className="content-title mx-auto text-uppercase">
                        Politics
                      </h4>
                      <span />
                      <p>Be a part of politics</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-cat-widget">
                <div className="content relative">
                  <div className="overlay overlay-bg" />
                  <a href onClick={(e) => { e.preventDefault() }}>
                    <div className="thumb">
                      <img
                        className="content-image img-fluid d-block mx-auto"
                        src={cat}
                        alt=""
                      />
                    </div>
                    <div className="content-details">
                      <h4 className="content-title mx-auto text-uppercase">Food</h4>
                      <span />
                      <p>Let the food be finished</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default WorkInLith