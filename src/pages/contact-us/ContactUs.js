import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { httpPostWithNoToken } from '../../helpers/api'
import Map from './Map'

const ContactUs = () => {
  const [submitting, setSubmitting] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const clearForm = () => {
    setInputValues({
      ...inputValues,
      name: "",
      subject: "",
      message: "",
      email: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);
      const data = {
        ...inputValues,
        name: inputValues.name,
        email: inputValues.email,
        subject: inputValues.subject,
        message: inputValues.message,
      };

      const res = await httpPostWithNoToken("contacts", data);
      console.log(data)
      Swal.fire({
        title: "Successful 😀",
        text: "Your details have been submitted Successfully, We will get in touch shortly",
        // type: "success",
      });
      console.log(res);
      setSubmitting(false);
      clearForm();
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: "Sorry 😞, we couldn't process your details",
        text: error.message,
        // type: "error",
      });
      clearForm();
    }
  };


  return (
    <div>
      <section className="banner-area relative about-banner" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Contact Us</h1>
              <p className="text-white link-nav">
                <a href="/">Home </a>{" "}
                <span className="lnr lnr-arrow-right" />{" "}
                <a href="/contact-us"> Contact Us</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-page-area section-gap">
        <div className="container">
          <div className="row">
            <Map
              className="map-wrap"
              style={{ width: "100%", height: 445 }}
              id="map"
            />

            <div className="col-lg-4 d-flex flex-column address-wrap">
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-home" />
                </div>
                <div className="contact-details">
                  <h5>Cardinal House, Ogba</h5>
                  <p>3, Ijaiye Road, Ogba Lagos</p>
                </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-phone-handset" />
                </div>
                <div className="contact-details">
                  <h5>+234 802 104 6058. </h5>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-envelope" />
                </div>
                <div className="contact-details">
                  <h5>
                    <a href="https://mail.google.com/mail/Info@flyboxconsult.com" target="_blank" rel="noreferrer">
                      Info@flyboxconsult.com
                    </a>
                  </h5>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form
                className="form-area contact-form text-right"
                // id="myForm"
                onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="common-input mb-20 form-control"
                      // required
                      value={inputValues.name}
                      onChange={handleChange}

                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                      className="common-input mb-20 form-control"
                      // required
                      value={inputValues.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter subject"
                      className="common-input mb-20 form-control"
                      // required
                      onChange={handleChange}
                      value={inputValues.subject}
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <textarea
                      className="common-textarea form-control"
                      name="message"
                      placeholder="Enter Message"
                      // required
                      value={inputValues.message}
                      onChange={handleChange}
                    // defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="alert-msg" style={{ textAlign: "left" }} />
                    <button value={submitting}
                      className="genric-btn primary"
                      style={{ float: "right" }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs