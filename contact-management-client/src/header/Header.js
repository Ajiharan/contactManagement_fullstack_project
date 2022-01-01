import React from "react";
import styled from "styled-components";
const Header = () => {
  console.log("header");
  return (
    <NavbarTop>
      <div className="navbarTop__container">
        <h2 className="text-center">Contact Management System</h2>
      </div>
    </NavbarTop>
  );
};

const NavbarTop = styled.div`
  padding: 10px;
  min-height: 50px;
  background-repeat: no-repeat;
  border-bottom: 2px solid rgb(245, 187, 80);
  background-size: cover;
  background-position: bottom;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25),
    0px 2px 4px rgba(225, 233, 238, 0.2);
  .navbarTop__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2 {
      background: linear-gradient(
        to left,
        rgb(245, 161, 82),
        rgb(223, 173, 37)
      );
      -webkit-background-clip: text;
      display: inline;
      -webkit-text-fill-color: transparent;
      font-size: 3rem;
    }
    .navbarTop__containerImages {
      display: flex;
      img {
        background-color: rgb(253, 252, 251);
        margin: 10px;
        padding: 4px;
        border-radius: 100%;
        box-shadow: 0px 10px 10px rgba(206, 148, 60, 0.774),
          0px 20px 20px rgba(240, 187, 74, 0.15),
          0px 30px 30px rgba(240, 187, 74, 0.1);
        height: 50px;
        object-fit: contain;
      }
    }
  }
`;

export default Header;
