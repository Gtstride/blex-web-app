import React from 'react'

export default function AvailableCourseView() {
  return (
    <div>
      <section className="search-course-area relative">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6 search-course-left">
              <h1 className="text-white">
                Get quick response to<br />
                help you take a decision !
              </h1>
              <p className="text-white">
                Let us help you decide the best route for you, taking informed decision is why we are still in
                business, why not lets' help you get the information you need, so you can decide quickly.
              </p>
              <div className="row details-content">
                <div className="col single-detials">
                  <span className="lnr lnr-graduation-hat" />
                  <a href onClick={(e) => { e.preventDefault() }}>
                    <h4>Study Expert</h4>
                  </a>
                  <p className="text-white">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </div>
                <div className="col single-detials">
                  <span className="lnr lnr-license" />
                  <a href onClick={(e) => { e.preventDefault() }}>
                    <h4>Work Expert</h4>
                  </a>
                  <p className="text-white">
                    Usage of the Internet is becoming more common due to rapid
                    advancement of technology and power.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 search-course-right section-gap">
              <form className="form-wrap" action="#">
                <h4 className="text-white pb-20 text-center mb-30">
                  Get Information about study, work and relocation!
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
                    <option datd-display>Choose What you want to know about</option>
                    <option value={1}>Get Information about study</option>
                    <option value={2}>Get Information about work</option>
                    <option value={3}>Get Information about relocating</option>
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
