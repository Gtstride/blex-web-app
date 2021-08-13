import React, { useState, useEffect } from "react";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { httpPostWithNoToken } from '../../../helpers/api'
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
// import CountrySelect from 'react-bootstrap-country-select';




const AustraliaEnquiryForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  let [phone, setPhone] = useState("");
  const [inputValues, setInputValues] = useState({
    email: "",
    givenName: "",
    middleName: "",
    familyName: "",
    birthDate: "",
    countryOfCitizenship: "",
    immigrationHistory: "",
    houseAddress: "",
    programLevel: "",
    gender: "",
    visaDenialLetter: "",
    //phone: "",
  })

  const clearForm = () => {
    setInputValues({
      ...inputValues,
      email: "",
      givenName: "",
      middleName: "",
      familyName: "",
      birthDate: "",
      countryOfCitizenship: "",
      immigrationHistory: "",
      houseAddress: "",
      programLevel: "",
      gender: "",
      visaDenialLetter: "",
      //   phone: "",
    })
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        email: inputValues.email,
        givenName: inputValues.givenName,
        middleName: inputValues.middleName,
        familyName: inputValues.familyName,
        birthDate: inputValues.birthDate,
        countryOfCitizenship: inputValues.countryOfCitizenship,
        immigrationHistory: inputValues.immigrationHistory,
        houseAddress: inputValues.houseAddress,
        programLevel: inputValues.programLevel,
        gender: inputValues.gender,
        visaDenialLetter: inputValues.visaDenialLetter,
        // phone: inputValues.phone.charAt(4) === "0"
        //   ? (phone = phone.replace(phone.charAt(4), ""))
        //   : phone,
        phoneNumber: phone,
        referred_by: inputValues.referral,
      }

      const response = await httpPostWithNoToken("australia_form", data);
      console.log(data);
      Swal.fire({
        title: "Successful 😀",
        text: "Your details have been submitted Successfully, We would get in touch shortly",
      });
      console.log(data);
      setSubmitting(false);
      setInputValues({
        ...inputValues,
        email: "",
        givenName: "",
        middleName: "",
        familyName: "",
        birthDate: "",
        countryOfCitizenship: "",
        immigrationHistory: "",
        houseAddress: "",
        programLevel: "",
        gender: "",
        visaDenialLetter: "",
        phone: "",
      })
      clearForm();
      setShow(false);
      console.log(response);
    } catch (error) {
      Swal.fire({
        title: "Sorry 😞",
        text: error.message,
      });
      // clearForm();
      // closeModal()
    }
  }

  const handleOnChange = (value) => {
    setPhone(value);
    // setSubmitting(false);
    // setPhone("");
  };


  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        CLICK TO TALK TO US
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Provide Us with your details Here<br />
            *Every Field is required
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="email"
                    name="email"
                    value={inputValues.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    Email
                  </label>
                </div>
              </div>

              {/* Phone Number*/}
              <div className="col">
                <div className="form-outline">
                  <ReactPhoneInput
                    dropdownClass=""
                    inputClass=""
                    value={phone}
                    country="ng"
                    onChange={handleOnChange}
                  />

                  <label className="form-label">
                    Telephone</label>
                </div>
              </div>
            </div>

            {/* First Name */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="givenName"
                    value={inputValues.givenName}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    First Name
                  </label>
                </div>
              </div>

              {/* Middle Name */}
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="middleName"
                    value={inputValues.middleName}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    Middle Name
                  </label>
                </div>
              </div>

              {/* Family Name */}
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    min="3"
                    max="100"
                    name="familyName"
                    value={inputValues.familyName}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label">
                    Family Name</label>
                </div>
              </div>
            </div>

            {/* Birth Name */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="birthDate"
                    value={inputValues.birthDate}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Jan 14"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    Birth Date
                  </label>
                </div>
              </div>

              {/* Country Of Citizenship */}
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="countryOfCitizenship"
                    value={inputValues.countryOfCitizenship}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label">
                    Country Of Citizenship</label>
                </div>
              </div>
            </div>

            {/* House Address */}
            <div className="form-outline mb-4">
              <input
                type="text"
                min="3"
                max="100"
                name="houseAddress"
                value={inputValues.houseAddress}
                onChange={handleChange}
                className="form-control"
              />
              <label className="form-label" htmlFor="form3Example3">
                House Address
              </label>
            </div>

            {/* Program Level */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <select
                    className="form-control"
                    name="programLevel"
                    value={inputValues.programLevel}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="" disabled>Please select your program</option>
                    <option value="bsc">BSc</option>
                    <option value="masters">Masters</option>
                  </select>
                  <label className="form-label">
                    Program Level</label>
                </div>
              </div>

              {/* Immigration History */}
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="immigrationHistory"
                    value={inputValues.immigrationHistory}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Immigration History"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    Countries visited separated with a comma
                  </label>
                </div>
              </div>
            </div>

            {/* Visa Denial */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    // type="file"
                    type="text"
                    name="visaDenialLetter"
                    value={inputValues.visaDenialLetter}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    Visa Denial Letter, If any?
                  </label>
                </div>
              </div>

              {/* Gender */}
              <div className="col">
                <div className="form-outline">
                  <select
                    className="form-control"
                    name="gender"
                    value={inputValues.gender}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="" disabled>Please select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    {/* <option value="prefer_not_say">Prefer not to say</option> */}
                  </select>
                  <label className="form-label">
                    Gender</label>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <Button onClick={handleClose} className="genric-btn warning" style={{ float: "left" }}>Cancel</Button>
              <button value={submitting} className="genric-btn success" style={{ float: "right" }}>Send Message</button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AustraliaEnquiryForm;



