import React, { useEffect, useState } from "react";
import { getAllContactsDetails } from "../state-management/contact/ContactAction";
import { selectContactsDetails } from "../state-management/contact/ContactSlice";
import { useDispatch, useSelector } from "react-redux";
import ContactModal from "../modal/ContactModal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ContactTable from "./ContactTable";
import styled from "styled-components";
const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [contactDatas, setContactDatas] = useState([]);
  const contactDetails = useSelector(selectContactsDetails);

  useEffect(() => {
    console.log("contact details", contactDetails);
    setContactDatas(contactDetails);
  }, [contactDetails]);

  const handleClose = () => {
    setShowModal(false);
  };
  const ViewProductModal = (props) => {
    return <ContactModal show={showModal} handleClose={handleClose} />;
  };
  return (
    <HomeContainer>
      <div className="contactContainer">
        <div className="contactHeader">
          {contactDatas?.length === 0 && (
            <h5 className="text-center text-light fw-b m-4 bg-danger p-3">
              contacts are not available now please add some contacts
            </h5>
          )}
          <div
            className="addButton"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <AddCircleIcon className="text-light bg-warning" />
            <span className="text-warning text-lead fw-bold m-1 logName">
              Add Contact
            </span>
          </div>
        </div>
        <ContactTable contactDatas={contactDatas} />

        {showModal && ViewProductModal()}
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  .addButton {
    width: 15rem;

    border: 2px solid orange;
    padding: 10px;
    margin: 2rem;

    cursor: pointer;
    transition: all 0.32s ease-out;
    &:hover {
      background-color: rgb(250, 171, 25) !important;
      color: white;
      box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.25),
        -6px -6px 10px 0 rgba(255, 255, 255, 0.3);
    }
    &:hover .logName {
      color: white !important;
    }
    .MuiSvgIcon-root {
      font-size: 1.7rem;
      padding: 5px;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.34s ease-in;
    }
    &:hover .MuiSvgIcon-root {
      box-shadow: 3px 3px 7px 0 rgba(0, 0, 0, 0.25),
        -4px -4px 7px 0 rgba(255, 255, 255, 0.3);
    }
  }
`;

export default Home;
