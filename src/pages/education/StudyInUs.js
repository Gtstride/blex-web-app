import React from 'react'
import USEnquiryForm from "./forms/USEnquiryForm"

const StudyInUs = () => {
  return (
    <>
      <section className="banner-area relative study-us-home-banner blog-home-banner" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content blog-header-content col-lg-12">
              <h1 className="text-white">Study In US</h1>
              <p className="text-white">
                You have made the right choice by choosing to study in US, surely<br /> America is one the best locations
                to study in the world, kindly provide the <br /> requested information and lets get started.
              </p>
              <USEnquiryForm height="3em" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default StudyInUs