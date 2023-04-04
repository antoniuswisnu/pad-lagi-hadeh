import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import NavDashboard from "../modal/navDashboard";
import Card from "../modal/card";

const Example = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let items = [];

  for (let i = 0; i < 2; i++) {
    items.push(<Card></Card>);
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Hello, Admin</h1>
        <h2>Welcome to Dashboard Class</h2>

        <NavDashboard className="mt-5"></NavDashboard>

        <Button className="mt-5" variant="primary" onClick={handleShow}>
          Create a new Class
        </Button>

        <Modal className="mt-5" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a New Label</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Topic Name</Form.Label>
                <Form.Control type="email" placeholder="" autoFocus />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="mt-5"></div>

        {items}
      </div>
    </>
  );
};

export default Example;
