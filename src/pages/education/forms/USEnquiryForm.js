import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
// import { httpPostWithToken, httpGetWithNoToken } from "../../components/helpers/api";
// import { Spinner } from "react-bootstrap";
// import Swal from "sweetalert2";

const USEnquiryForm = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // const [truck, setTruck] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [inputValues, setInputValues] = useState({
  //   truckName: "",
  //   cargoTonnes: "",
  //   truckType: "",
  //   pricePerKM: ""
  // })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputValues({ ...inputValues, [name]: value })
  // }

  // get truck function
  // const getTruckTypes = async () => {
  //   try {
  //     setLoading(true);
  //     let res = await httpGetWithNoToken("get_truck_types");
  //     console.log(res);
  //     props.setTruck([...res.data]);
  //     setLoading(false);
  //   } catch (error) {
  //     Swal.fire({
  //       title: "Sorry 😞",
  //       text: error.message,
  //       type: "error",
  //     });
  //   }
  // };

  // const register = async (e) => {
  //   try {
  //     e.preventDefault();
  //     setSubmitting(true);
  //     setLoading(true);
  //     const payload = {
  //       name: inputValues.truckName,
  //       cargo_tonnes: inputValues.cargoTonnes,
  //       type: inputValues.truckType,
  //       price_per_km: inputValues.pricePerKM,
  //     }

  //     const response = await httpPostWithToken("create_truck_type", payload);
  //     console.log(response);
  //     await getTruckTypes();
  //     console.log(payload);
  //     setTruck(response);
  //     setLoading(true);
  //     setSubmitting(false);
  //     clearForm();
  //     setShow(false);

  //   } catch (error) {
  //     Swal.fire({
  //       title: "Sorry 😞",
  //       text: error.message,
  //       type: "error",
  //     });
  //   }
  // }

  // const clearForm = () => {
  //   setInputValues({
  //     ...inputValues,
  //     truckName: "",
  //     cargoTonnes: "",
  //     truckType: "",
  //     pricePerKM: "",
  //   })
  // }

  // useEffect(() => {
  //   getTruckTypes();
  //   deleteTruck();
  // }, [setTruck]);

  // useCallback(
  //   () => {
  //     getTruckTypes();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [truck, getTruckTypes],
  // )
  const register = () => {
    console.log("Got this")
    setSubmitting(true);
  }

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        CLICK TO TALK TO US
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Provide Us with your details Here<br />
            *Every Field is required
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={register}>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="truckName"
                    // value={inputValues.truckName}
                    // onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    Email
                  </label>
                </div>
              </div>

              {/* Type of Truck */}
              <div className="col">
                <div className="form-outline">
                  <input
                    type="tel"
                    name="telephone"
                    // value={inputValues.truckName}
                    // onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label">
                    Telephone</label>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="truckName"
                    // value={inputValues.truckName}
                    // onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    First Name
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="truckName"
                    // value={inputValues.truckName}
                    // onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    Middle Name
                  </label>
                </div>
              </div>

              {/* Type of Truck */}
              <div className="col">
                <div className="form-outline">
                  <input
                    type="number"
                    min="3"
                    max="100"
                    name="cargoTonnes"
                    // value={inputValues.cargoTonnes}
                    // onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label">
                    Family Name</label>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="truckName"
                    // value={inputValues.truckName}
                    // onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    Birth Date
                  </label>
                </div>
              </div>

              {/* Type of Truck */}
              <div className="col">
                <div className="form-outline">
                  <input
                    type="tel"
                    name="telephone"
                    // value={inputValues.truckName}
                    // onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label">
                    Country Of Citizenship</label>
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                min="3"
                max="100"
                name="cargoTonnes"
                // value={inputValues.cargoTonnes}
                // onChange={handleChange}
                className="form-control"
              />
              <label className="form-label" htmlFor="form3Example3">
                House Address
              </label>
            </div>

            {/* <!-- Price per km --> */}
            <div className="form-outline mb-4">
              <input
                type="text"
                name="pricePerKM"
                // value={inputValues.pricePerKM}
                // onChange={handleChange}
                className="form-control"
              />
              <label className="form-label" htmlFor="form3Example3">
                Immigration history: (Countries visited )
              </label>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    name="visa-denial"
                    // value={inputValues.truckName}
                    // onChange={handleChange}
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form3Example1">
                    Visa Denial, Letter, If any?
                  </label>
                </div>
              </div>

              {/* Type of Truck */}
              <div className="col">
                <div className="form-outline">
                  <select
                    className="form-control"
                    name="gender"
                  // value={inputValues.truckType} 
                  // onChange={handleChange}
                  >
                    <option value="" disabled>Please select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefer_not_say">Prefer not to say</option>
                    <option value="blonde">Blonde</option>
                  </select>
                  <label className="form-label">
                    Gender</label>
                </div>
              </div>
            </div>
            <Modal.Footer>
              <Button value="cancel" variant="outline-danger" onClick={handleClose}>
                Cancel
              </Button>
              <Button value={submitting} variant="outline-warning">
                Send Message
              </Button>
            </Modal.Footer>

            {/* <div className="button">
              <button value="submit" className="btn btn-outline-success btn-block mb-4">
                Submit
              </button>
            </div> */}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default USEnquiryForm;
