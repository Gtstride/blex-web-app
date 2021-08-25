import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const FlexBoxFees = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow} className="fly_box_fee">
        Our Fees
      </Button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Our Fees</Modal.Title>
        </Modal.Header>
        <Modal.Body justify>
          Every Applicant is entitled to two (2) applications and the application fee is #150,000 for Canada, USA and Australia. <br />
          <br /> Fees are to be paid at the commencement of application &amp; no service charge is involved.
          Students applying to Uk are not required to pay any fees
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FlexBoxFees
