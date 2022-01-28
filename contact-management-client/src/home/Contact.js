import React from "react";
import styled from "styled-components";
const Contact = ({ data, setShowModal, setContactData }) => {
  return (
    <ConactListRow key={data._id}>
      <div className="left">
        <h5>{data.name}</h5>
        <p>{data.email}</p>
        <p>{data?.address && data.address}</p>
        {data?.phoneNo && <p>phone No :- {data.phoneNo}</p>}
      </div>
      <div className="right">
        <button
          className="btn btn-small btn-danger"
          onClick={() => {
            setShowModal(true);
            setContactData(data);
          }}
        >
          select
        </button>
      </div>
    </ConactListRow>
  );
};

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
    p {
      background-color: whitesmoke;
      opacity: 0.6;
      border-radius: 10px;
      margin-right: 1rem;
      padding: 0.4rem;
      color: black;
      font-weight: bold;
    }
  }
`;
export default Contact;
