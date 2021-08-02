import React from 'react'
import aboutUs from "../../assets/img/about-us.jpg"
import playButton from "../../assets/img/play.png"

const AboutUs = () => {
  return (
    <div>
      <section className="banner-area relative about-banner" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">About Us</h1>
              <p className="text-white link-nav">
                <a href="/">Home </a>{" "}
                <span className="lnr lnr-arrow-right" />{" "}
                <a href="/about-us"> About Us</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-feature">
                <div className="title">
                  <h4>Study Package</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    All the information you need about studying abroad, be it UK, USA, Canada, &amp; Austrialia, all in one place.
                  </p>
                  <a href onClick={(e) => e.preventDefault(e)}>Call Us Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-feature">
                <div className="title">
                  <h4>Work Package</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    All the information you need about working abroad, be it UK, USA, Canada, &amp; Austrialia, all in one place.
                  </p>
                  <a href onClick={(e) => e.preventDefault(e)}>Call Us Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-feature">
                <div className="title">
                  <h4>Work / Study / Relocation Package</h4>
                </div>
                <div className="desc-wrap">
                  <p>
                    All the information you need about working abroad, be it UK, USA, Canada, &amp; Austrialia, all in one place.
                  </p>
                  <a href onClick={(e) => e.preventDefault(e)}>Call Us Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="info-area pb-120">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 no-padding info-area-left">
              <img className="img-fluid" src={aboutUs} alt="" />
            </div>
            <div className="col-lg-6 info-area-right">
              <h1>Who we are</h1>
              <p>
                Inappropriate behavior is often laughed off as “boys will be boys,”
                women face higher conduct standards especially in the workplace.
                That’s why it’s crucial that, as women, our behavior on the job is
                beyond reproach.
              </p>
              <br />
              <p>
                inappropriate behavior is often laughed off as “boys will be boys,”
                women face higher conduct standards especially in the workplace.
                That’s why it’s crucial that, as women, our behavior on the job is
                beyond reproach. inappropriate behavior is often laughed off as
                “boys will be boys,” women face higher conduct standards especially
                in the workplace. That’s why it’s crucial that, as women, our
                behavior on the job is beyond reproach.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="course-mission-area pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">What we are out to help you achieve</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 accordion-left">
              <dl className="accordion">
                <dt>
                  <a href onClick={(e) => e.preventDefault(e)}>Our Vision</a>
                </dt>
                <dd>
                  Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo
                  ut scelerisque mattis, leo quam aliquet diam, congue laoreet elit
                  metus eget diam. Proin ac metus diam.
                </dd>
                <dt>
                  <a href onClick={(e) => e.preventDefault(e)}>Our Achievements</a>
                </dt>
                <dd>
                  Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
                  mauris sit amet orci. Aenean dignissim pellentesque felis. leo
                  quam aliquet diam, congue laoreet elit metus eget diam.
                </dd>
                <dt>
                  <a href onClick={(e) => e.preventDefault(e)}>Our Mission</a>
                </dt>
                <dd>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac
                  metus diam.
                </dd>
                <dt>
                  <a href onClick={(e) => e.preventDefault(e)}>Our Aims</a>
                </dt>
                <dd>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac
                  metus diam.
                </dd>
                <dt>
                  <a href onClick={(e) => e.preventDefault(e)}>Our Goals</a>
                </dt>
                <dd>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac
                  metus diam.
                </dd>
              </dl>
            </div>
            <div className="col-md-6 video-right justify-content-center align-items-center d-flex relative">
              <div className="overlay overlay-bg" />
              <a className="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
                <img className="img-fluid mx-auto" src={playButton} alt="" style={{ height: "50%" }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs