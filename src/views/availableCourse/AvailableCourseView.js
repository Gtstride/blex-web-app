import React, { useState } from 'react'
import Swal from "sweetalert2";
import { httpPostWithNoToken } from '../../helpers/api'

const AvailableCourseView = () => {

  const [isLoaded, setIsLoaded] = useState(true)
  const [submitting, setSubmitting] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    name: "",
    phone_number: "",
    choose_what_you_want_to_know_about: "",
  });

  const clearForm = () => {
    setInputValues({
      ...inputValues,
      email: "",
      name: "",
      phone_number: "",
      choose_what_you_want_to_know_about: "",
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  const handleIsLoadedToggle = () => {
    setIsLoaded(currentIsLoaded => !currentIsLoaded)
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubmitting(true);

      const data = {
        email: inputValues.email,
        name: inputValues.name,
        phoneNumber: inputValues.phone_number,
        chooseWhatYouWantToKnowAbout: inputValues.choose_what_you_want_to_know_about,
      }

      const response = await httpPostWithNoToken("relocation_form", data);
      // console.log(data)
      console.warn(response)
      Swal.fire({
        title: "Successful 😀",
        text: "Your details have been submitted Successfully, We would get in touch shortly",
      });
      setSubmitting(false);
      setInputValues({
        email: "",
        name: "",
        phone_number: "",
        choose_what_you_want_to_know_about: ""
      })
      clearForm();
    } catch (error) {
      // console.log("Here>>", error)
      Swal.fire({
        title: "Sorry 😞",
        text: "Please check to make sure you supplied the right details and in the right format and all fields are required",
        // message: error.response
      });
      setIsLoaded(false);
      console.warn(isLoaded)
      setSubmitting(false);
      // clearForm();
    }
  }

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
                   Our team of Study Experts are ready to take you through to achieving success
                  </p>
                </div>
                <div className="col single-detials">
                  <span className="lnr lnr-license" />
                  <a href onClick={(e) => { e.preventDefault() }}>
                    <h4>Education Expert</h4>
                  </a>
                  <p className="text-white">
                    With proven years of many experiences and abundant testimonies, our experts qualify to walk you through gaining admission!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 search-course-right section-gap">
              <form className="form-wrap" onSubmit={handleSubmit}>
                <h4 className="text-white pb-20 text-center mb-30">
                  Get Information about study, work and relocation!
                </h4>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={inputValues.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                />
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={inputValues.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                <input
                  type="tel"
                  className="form-control"
                  name="phone_number"
                  value={inputValues.phone_number}
                  onChange={handleChange}
                  placeholder="Phone Number: +234 803 XXX XXXX"
                />
                <select
                  className="form-control"
                  name="choose_what_you_want_to_know_about"
                  value={inputValues.choose_what_you_want_to_know_about}
                  onChange={handleChange}
                >
                  <option value="" disabled>Please select what you to know</option>
                  <option value="information_about_study">Get Information About Studying Abroad</option>
                  {/* <option value="information_about_work">Get Information about work</option> */}
                  {/* <option value="information_about_relocation">Get Information about relocating</option> */}
                </select>
                <button value={submitting} onClick={handleIsLoadedToggle} className="primary-btn text-uppercase">
                  {!submitting ?
                    <button className="primary-btn text-uppercase">
                      Submit
                    </button> :
                    (
                      <i className="fa fa-refresh fa-spin" style={{ fontSize: '24px' }}></i>
                    )
                  }
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AvailableCourseView
