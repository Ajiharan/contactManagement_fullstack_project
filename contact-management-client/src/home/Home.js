import React, { useEffect, useState, useCallback } from "react";
import {
  getAllSearchDetails,
  getAllContactsDetails,
} from "../state-management/contact/ContactAction";
import {
  selectContactsDetails,
  selectContactsLoading,
} from "../state-management/contact/ContactSlice";
import { useDispatch, useSelector } from "react-redux";
import ContactModal from "../modal/ContactModal";

import ContactTable from "./ContactTable";
import styled from "styled-components";
import SearchField from "../common/SearchField";
import AnimationButton from "../common/AnimationButton";
const Home = () => {
  const contactDetails = useSelector(selectContactsDetails);
  const contactLoading = useSelector(selectContactsLoading);
  const [showModal, setShowModal] = useState(false);
  const [contactDatas, setContactDatas] = useState(contactDetails);
  const [loading, setLoading] = useState(contactLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    setContactDatas(contactDetails);
  }, [contactDetails]);

  useEffect(() => {
    setLoading(contactLoading);
  }, [contactLoading]);

  const handleClose = () => {
    setShowModal(false);
  };

  const ViewContactModal = () => {
    return (
      <ContactModal
        show={showModal}
        handleClose={handleClose}
        heading={"CONTACT FORM"}
        isAdd={true}
      />
    );
  };

  const handleSearch = (searchValue) => {
    const { inputValue, searchType } = searchValue;
    dispatch(getAllSearchDetails({ type: searchType, value: inputValue }));
  };

  const setModalShow = useCallback((value) => {
    setShowModal(value);
  }, []);

  const handleReset = useCallback(() => {
    dispatch(getAllContactsDetails(0));
  }, [dispatch]);

  return (
    <HomeContainer>
      <div className="contactContainer">
        <div className="contactHeader">
          <div className="headerFields">
            <AnimationButton
              name={"Add product"}
              setShowModal={setModalShow}
              isReset={false}
            />
            <AnimationButton
              name={"Reset Data"}
              isReset={true}
              resetContactData={handleReset}
            />
            <SearchField handleSearch={handleSearch} />
          </div>
          {contactDatas?.length === 0 && !loading && (
            <h5 className="text-center text-light fw-b m-4 bg-danger p-3">
              No results found yet..
            </h5>
          )}
        </div>
        <ContactTable contactDatas={contactDatas} loading={loading} />

        {showModal && ViewContactModal()}
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  .headerFields {
    display: flex;
    align-items: center;
  }
`;

export default Home;
