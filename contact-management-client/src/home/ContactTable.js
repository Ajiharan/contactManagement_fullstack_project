import React, { useState } from "react";
import styled from "styled-components";
import SkeletonContainer from "../common/SkeletonContainer";
import ContactModal from "../modal/ContactModal";

const ContactTable = ({ contactDatas, loading }) => {
  const [showModal, setShowModal] = useState(false);
  const [contactData, setContactData] = useState(null);

  const handleClose = () => {
    setShowModal(false);
  };

  const ViewContactModal = () => (
    <ContactModal
      show={showModal}
      handleClose={handleClose}
      heading={"CONTACT UPDATE FORM"}
      isAdd={false}
      contactData={contactData}
    />
  );

  return (
    <ListContainer>
      {loading ? (
        <div className="skeletonCon">
          <SkeletonContainer count={8} />
        </div>
      ) : (
        <div className="Product__list m-4 p-1">
          {contactDatas.map((res) => (
            <ConactListRow key={res._id}>
              <div className="left">
                <h5>{res.name}</h5>
                <p>
                  {res.email}
                  {res?.address && `-------[${res.address}]`}
                </p>
                {res?.phoneNo && <p>phone No :- {res.phoneNo}</p>}
              </div>
              <div className="right">
                <button
                  className="btn btn-small btn-danger"
                  onClick={() => {
                    setShowModal(true);
                    setContactData(res);
                  }}
                >
                  select
                </button>
              </div>
            </ConactListRow>
          ))}
        </div>
      )}
      {showModal && ViewContactModal()}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 50%;

  .skeletonCon {
    padding: 1rem;
  }
`;

const ConactListRow = styled.div`
  background-color: rgb(250, 171, 25) !important;

  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.25),
    -6px -6px 10px 0 rgba(255, 255, 255, 0.3);

  opacity: 0.9;
  font-weight: 600;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  .left {
    flex: 1;
  }
`;

export default ContactTable;
