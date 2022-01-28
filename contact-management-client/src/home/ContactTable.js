import React, { useState } from "react";
import styled from "styled-components";
import SkeletonContainer from "../common/SkeletonContainer";
import ContactModal from "../modal/ContactModal";
import Contact from "./Contact";

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
            <Contact
              data={res}
              setShowModal={setShowModal}
              setContactData={setContactData}
            />
          ))}
        </div>
      )}
      {showModal && ViewContactModal()}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 50%;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 70vh;
  ::-webkit-scrollbar {
    display: none;
  }

  .skeletonCon {
    padding: 1rem;
  }
`;

export default React.memo(ContactTable);
