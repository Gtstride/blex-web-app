import React from 'react'
import LithanuaEnquiryForm from "./forms/EnquiryAboutLithanua"


const WorkInLith = () => {
  return (
    <>
      <section className="banner-area relative lithanuia-blog-home-banner" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          {/* <div className="row d-flex align-items-center justify-content-center"> */}
          <div className="about-content blog-header-content col-lg-12">
            <h1 className="text-white">Work In Lithuania</h1>
            <button onClick={(e) => e.preventDefault(e)} className="primary-btn">
              Fill the Form below to know more
            </button> <br />
            <p><LithanuaEnquiryForm /></p>
          </div>
          {/* </div> */}
        </div>
      </section>
      <div className="section-top-border">
        <h3 className="mb-30">Skilled Jobs</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="single-defination">
              <h4 className="mb-10">Skilled Jobs : Where experience is needed</h4>
              <p>
                i. Construction Jobs: With/without experience &amp; <br />
                <ul>
                  <li>
                    Driving Jobs (Driving license is required)</li>
                  <ul>ii. Hourly Rate depends on your qualification:
                    <li>€4 – €5 (on average, for unskilled jobs),</li>
                    <li>€5 – €7 (on average, for more skilled jobs)</li>
                    <ul>
                      <li>Monthly salary: €600 – €800 / €800 – €1000</li>
                    </ul>
                  </ul>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-defination">
              <h4 className="mb-20">Accommodation Information</h4>
              <p>
                Accommodation: €50 – €60 per month (comfortable rooms for 2-3 people) <br />
                Some jobs also offer free meals &amp; transportation
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks

              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="single-defination">
              <h4 className="mb-20">Processing duration is 4months</h4>
              <p>
                <ol>
                  <li>Farming, Watering, Cleaning, Weeding, Harvesting, Sorting &amp; packaging etc</li>
                  <li>Warehouse staff (loading/offloading, stocking, sorting), etc </li>
                  <li>Kitchen: Cleaning, helping, cooking &amp; serving</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default WorkInLith