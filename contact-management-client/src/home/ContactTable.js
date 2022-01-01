import React from "react";
import styled from "styled-components";

const ContactTable = ({ contactDatas }) => {
  return (
    <ListContainer>
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
              <button className="btn btn-small btn-danger">select</button>
            </div>
          </ConactListRow>
        ))}
      </div>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 50%;
`;

const ConactListRow = styled.div`
  background-color: rgb(250, 171, 25) !important;
  color: white;
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
