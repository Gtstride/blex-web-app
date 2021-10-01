import React, { Fragment, useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import Swal from "sweetalert2";
import { httpPostWithNoToken } from '../../../helpers/api'
// import CountrySelect from 'react-bootstrap-country-select';


const UKEnquiryForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [show, setShow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true)
  const [submitting, setSubmitting] = useState(false);
  let [phone, setPhone] = useState("");
  const [pdfFile, setPdfFile] = useState("");

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
    highestLevelOfEducation: "",
    desiredCourseOfStudy: "",
    //phone: "",
  })

  const handleOnChange = (value) => {
    setPhone(value);
    // setSubmitting(false);
    // setPhone("");
  };

  // const fileType = ['application/pdf'];
  const handlePdfFileChange = async (e) => {
    setPdfFile(e.target.files[0]);
  }

  const handleIsLoadedToggle = () => {
    setIsLoaded(currentIsLoaded => !currentIsLoaded)
  }

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
      highestLevelOfEducation: "",
      desiredCourseOfStudy: "",
      //phone: "",
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
      let fd = new FormData()
      fd.append('email', inputValues.email);
      fd.append('givenName', inputValues.givenName);
      fd.append('middleName', inputValues.middleName);
      fd.append('familyName', inputValues.familyName);
      fd.append('birthDate', inputValues.birthDate);
      fd.append('countryOfCitizenship', inputValues.countryOfCitizenship);
      fd.append('immigrationHistory', inputValues.immigrationHistory);
      fd.append('houseAddress', inputValues.houseAddress);
      fd.append('programLevel', inputValues.programLevel);
      fd.append('highestLevelOfEducation', inputValues.highestLevelOfEducation);
      fd.append('desiredCourseOfStudy', inputValues.desiredCourseOfStudy);
      fd.append('gender', inputValues.gender);
      fd.append('phoneNumber', phone)
      fd.append('ukDenialLetter', pdfFile);

      const response = await httpPostWithNoToken("uk_form", fd);
      console.log(fd);
      Swal.fire({
        title: "Successful 😀",
        text: "Your details have been submitted Successfully, We would get in touch shortly",
        // text: `${"Thank you for successfully submitting  your details as"} ${response.email}. ${"We would get in touch shortly"}`,
      });
      console.log(response);
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
        highestLevelOfEducation: "",
        desiredCourseOfStudy: "",
        phone: "",
      })
      clearForm();
      setShow(false);
      window.location.reload(function(){setTimeout()},9000);
      console.log(response);
    } catch (error) {
      setIsLoaded(false)
      Swal.fire({
        title: "Sorry 😞",
        text: error.message
      });
      // clearForm()
      setIsLoaded(false);
      setSubmitting(false)
      console.log(isLoaded)
    }
  }


  return (
    <Fragment>
      <Button variant="outline-light" onClick={handleShow}>
        APPLY NOW
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Provide Us with your details<br />
            Field marked * is required
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
                    <span>*</span>Email
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
                    <span>*</span> Telephone</label>
                </div>
              </div>
            </div>

            {/* First Name  or Given Name */}
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
                    <span>*</span> First Name
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
                    <span>*</span> Middle Name
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
                    <span>*</span> Last Name</label>
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
                    <span>*</span> Date Of Birth
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
                    <span>*</span> Country Of Citizenship</label>
                </div>
              </div>
            </div>

            {/* Highest Level of Education */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="highestLevelOfEducation"
                    value={inputValues.highestLevelOfEducation}
                    onChange={handleChange}
                    className="form-control"
                  // placeholder="Jan 14"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    <span>*</span> Highest Level Of Education
                  </label>
                </div>
              </div>

              {/* Desired Course of Study */}
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="desiredCourseOfStudy"
                    value={inputValues.desiredCourseOfStudy}
                    onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label">
                    <span>*</span> Desired Course of Study</label>
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
                placeholder="13, Bode Thomas Lekki Lagos Nigeria"
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
                    {/* <option value=""></option> */}
                    <option value="" disabled>Please select your program</option>
                    <option value="bsc">BSc</option>
                    <option value="masters">Masters</option>
                    <option value="post-graduate diploma">Post-Graduate Diploma</option>
                    <option value="pre-masters degree">Pre-Masters Degree</option>
                  </select>
                  <label className="form-label">
                    <span>*</span> Proposed Program Level</label>
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
                    placeholder="Rome, UK, Canada"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    Immigration History
                  </label>
                </div>
              </div>
            </div>

            {/* Visa Denial */}
              <div className="row mb-4">
                  <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  onChange={handlePdfFileChange}
                  defaultValue={pdfFile}
                // value={inputValues.visaDenialLetter}
                />
                <label className="file-upload" htmlFor="inputGroupFile02">Please Upload Visa Denial Letter, if any? 
                <span className="ml-2"><strong>PDF Format Only!</strong> </span></label>
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
                    {/* <option value=""></option> */}
                    <option value="" disabled>Please select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
                  <label className="form-label">
                    Gender</label>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <Button onClick={handleClose} className="genric-btn success text-uppercase">Cancel</Button>
              {/* <button value={submitting} className="genric-btn success" style={{ float: "right" }}>Send Message</button> */}

              <button value={submitting} onClick={handleIsLoadedToggle}
                className="genric-btn warning text-uppercase"
                style={{ float: "right", }}
              >
                {!submitting ?
                  <button className="genric-btn warning text-uppercase"
                    style={{ border: "none" }}>
                    Send Message
                  </button> :
                  (
                    <i className="fa fa-refresh fa-spin" style={{ fontSize: '24px', border: "none" }}></i>
                  )
                }
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default UKEnquiryForm;



