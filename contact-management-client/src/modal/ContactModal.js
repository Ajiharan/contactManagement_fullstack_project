import React from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
const ContactModal = ({ show, handleClose }) => {
  console.log("ContactModal");
  return (
    <ContactModalContainer>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="loadingResetModal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-light text-uppercase">
            Contact Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
    </ContactModalContainer>
  );
};

const ContactModalContainer = styled.div`
  .loadingResetModal {
    .modal-content {
      margin-top: 15rem;
      min-height: 48vh !important;
      .modal-header {
        background-color: orange;
        .close {
          border: none;
          width: 40px;
          height: 33px;
          padding: 5px;
          font-size: 15px;
          background-color: orange;
          box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.25),
            -6px -6px 10px 0 rgba(255, 255, 255, 0.3);
          color: white;
          border-radius: 200px;
          transition: all 0.42s ease-in;
          &:hover {
            background-color: rgb(241, 162, 15);
          }
        }
      }
      .modalContainer__body {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
export default ContactModal;
