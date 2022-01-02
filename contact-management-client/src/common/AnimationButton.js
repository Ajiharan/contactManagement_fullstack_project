import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styled from "styled-components";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
const AnimationButton = ({ setShowModal, name, isReset, resetContactData }) => {
  return (
    <AnimationButtonContainer>
      <div
        className="addButton"
        onClick={() => {
          !isReset ? setShowModal(true) : resetContactData();
        }}
      >
        {!isReset ? (
          <AddCircleIcon className="text-light bg-warning" />
        ) : (
          <RestartAltIcon className="text-light bg-warning" />
        )}
        <span className="text-warning text-lead fw-bold m-1 logName">
          {name}
        </span>
      </div>
    </AnimationButtonContainer>
  );
};

const AnimationButtonContainer = styled.div`
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

export default AnimationButton;
