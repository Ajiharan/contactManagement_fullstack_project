import React from "react";
import { Modal, Spinner } from "react-bootstrap";
import styled from "styled-components";
const Model = ({
  show,
  message = "Please wait we are checking your creditionals...",
  width = "100%",
}) => {
  return (
    <ModalContainer
      show={show}
      backdrop="static"
      keyboard={false}
      centered
      dialogClassName="loadingModal"
      style={{ width: width }}
    >
      <Modal.Body>
        <div className="modalContainer__body">
          <Spinner
            animation="border"
            role="status"
            className="text-warning"
          ></Spinner>
          <p className="text-lead fw-bold text-warning">{message}</p>
        </div>
      </Modal.Body>
    </ModalContainer>
  );
};

const ModalContainer = styled(Modal)`
  .loadingModal {
    .modal-content {
      margin-top: 10rem;
      height: 25vh !important;
      .modalContainer__body {
        display: flex;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
export default React.memo(Model);
