import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Work extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>

        <section className="banner-area relative about-banner" id="home">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="about-content col-lg-12">
                <h1 className="text-white">Popular Courses</h1>
                <p className="text-white link-nav">
                  <a href="/">Home </a>
                  <span className="lnr lnr-arrow-right" />{" "}
                  <a href="/course"> Popular Courses</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="search-course-area relative">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-6 search-course-left">
                <h1 className="text-white">
                  Get quick response <br />
                  to help you make a decision !
                </h1>
                <p>
                  inappropriate behavior is often laughed off as “boys will be boys,”
                  women face higher conduct standards especially in the workplace.
                  That’s why it’s crucial that, as women, our behavior on the job is
                  beyond reproach.
                </p>
                <div className="row details-content">
                  <div className="col single-detials">
                    <span className="lnr lnr-graduation-hat" />
                    <a href onClick={(e) => e.preventDefault()}>
                      <h4>Expert Instructors</h4>
                    </a>
                    <p>
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </p>
                  </div>
                  <div className="col single-detials">
                    <span className="lnr lnr-license" />
                    <a href onClick={(e) => e.preventDefault()}>
                      <h4>Certification</h4>
                    </a>
                    <p>
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 search-course-right section-gap">
                <form className="form-wrap" action="#">
                  <h4 className="text-white pb-20 text-center mb-30">
                    Search for Available Course
                  </h4>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your Name'"
                  />
                  <input
                    type="phone"
                    className="form-control"
                    name="phone"
                    placeholder="Your Phone Number"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your Phone Number'"
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email Address"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your Email Address'"
                  />
                  <div className="form-select" id="service-select">
                    <select>
                      <option datd-display>Choose Course</option>
                      <option value={1}>Course One</option>
                      <option value={2}>Course Two</option>
                      <option value={3}>Course Three</option>
                      <option value={4}>Course Four</option>
                    </select>
                  </div>
                  <button className="primary-btn text-uppercase">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
