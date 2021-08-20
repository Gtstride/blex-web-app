import React from 'react'
import CanadaEnquiryForm from './forms/CanadaEnquiryForm'


const StudyInCanada = () => {
  return (
    <>
      <section className="banner-area relative study-canada-home-banner blog-home-banner" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content blog-header-content col-lg-12">
              <h1 className="text-white">Study In Canada</h1>
              <p className="text-white">
                With her door widely open for foreigners, and high employment  <br />rate, you have
                chosen the right location to study,<br/> Kindly provide the requested information and lets get started.
              </p>
              <CanadaEnquiryForm height="3em" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default StudyInCanada