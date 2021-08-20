import React from 'react'
import UKEnquiryForm from "./forms/UKEnquiryForm"


const StudyInUk = () => {
  return (
    <>
      <section className="banner-area relative study-uk-home-banner blog-home-banner" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content blog-header-content col-lg-12">
              <h1 className="text-white">Study In UK</h1>
              <p className="text-white">
                Great to have you here, you have made the right choice of choosing to <br />
                study in Uk,  kindly provide the requested information and lets get started.
              </p>
              <UKEnquiryForm height="3em" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default StudyInUk