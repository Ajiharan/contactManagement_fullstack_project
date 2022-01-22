import React from "react";
import { Modal } from "react-bootstrap";
import ErrorBoundary from "../Error/ErrorBoundary ";
import Contact from "../home/Contact";
import "./ContactModal.css";
const ContactModal = ({ show, handleClose, heading, isAdd, contactData }) => {
  return (
    <ErrorBoundary>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="loadingContactModal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-light text-uppercase">
            {heading || "Contact Form"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Contact
            isAdd={isAdd}
            contactData={contactData}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </ErrorBoundary>
  );
};

export default ContactModal;
