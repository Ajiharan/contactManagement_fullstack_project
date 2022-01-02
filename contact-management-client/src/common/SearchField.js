import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { Form } from "react-bootstrap";
const SearchField = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchType, setSearchType] = useState("name");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch({ inputValue, searchType });
    setInputValue("");
  };
  return (
    <TopContainer>
      <SearchFieldContainer>
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search__input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </form>
      </SearchFieldContainer>
      <Form.Select
        className="m-1"
        aria-label="name"
        value={searchType}
        onChange={(e) => {
          setSearchType(e.target.value);
        }}
      >
        <option value="email">Email</option>
        <option value="name">Contact name</option>
        <option value="phoneNo">Phone number</option>
      </Form.Select>
    </TopContainer>
  );
};

const TopContainer = styled.div`
  display: flex;
`;
const SearchFieldContainer = styled.div`
  border: 1px solid orange;
  padding: 0.5rem;

  .search__form {
    width: 100%;
    width: 25rem;
    display: flex;
    align-items: center;
  }
  .search__input {
    flex: 1;
    padding: 0.3rem;
    border: none;
    &:focus {
      box-shadow: none;
      outline: none;
      border: none;
    }
  }
`;
export default SearchField;
