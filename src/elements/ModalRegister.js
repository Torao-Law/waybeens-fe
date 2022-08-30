import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

function Register({ showModal, closeModal, loginModal }) {
  return (
    <Modal show={showModal} onHide={closeModal}>
      <div className="px-5 pb-3">
        <p
          className="fs-3 fw-bold"
          style={{ color: "#613D2B", paddingTop: 45 }}
        >
          Login
        </p>
        <Form className="mt-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              className="p-2 mb-3"
              type="email"
              placeholder="Type your email..."
              style={{
                textColor: "#613D2B",
                backgroundColor: "rgba(97, 61, 43, 0.25)",
                border: "2px solid #613D2B",
              }}
            />

            <Form.Control
              className="p-2 mb-3"
              type="password"
              placeholder="Type your password..."
              style={{
                backgroundColor: "rgba(97, 61, 43, 0.25)",
                border: "2px solid #613D2B",
              }}
            />

            <Form.Control
              className="p-2 mb-3"
              type="text"
              placeholder="Type your Name..."
              style={{
                backgroundColor: "rgba(97, 61, 43, 0.25)",
                border: "2px solid #613D2B",
              }}
            />
          </Form.Group>
        </Form>

        <Button
          className="fw-bold border-0 w-100 py-2 mt-3"
          style={{ backgroundColor: "#613D2B" }}
        >
          Register
        </Button>
        <p className="text-center mt-3">
          Don't have an account ? Klik{" "}
          <span
            onClick={loginModal}
            className="fw-bold"
            style={{ cursor: "pointer" }}
          >
            Here
          </span>
        </p>
      </div>
    </Modal>
  );
}

export default Register;
