import React from "react";
import styled from "styled-components";
const FormField = ({ formik, name, placeholder, type, label }) => {
  return (
    <Container>
      <div className="form-floating mb-3">
        <input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          {...formik.getFieldProps(name)}
        />
        <label htmlFor={name}>{label}</label>
        {formik.touched[name] && formik.errors[name] ? (
          <div className="error_div">
            <h6 className={"text-danger text-left mt-4 fw-bold"}>
              {formik.errors[name]}
            </h6>
          </div>
        ) : (
          <p style={{ opacity: 0 }}>{"null"}</p>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .p-error {
    color: red;
  }
`;

export default FormField;
