import React, { useState, useEffect } from "react";
import Model from "../modal/Model";
import useContactHandler from "../hooks/useContactHandler";
import { selectContactsError } from "../state-management/contact/ContactSlice";
import { useSelector } from "react-redux";
import FormField from "../common/FormField";

const Contact = ({ isAdd, contactData, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const { formik } = useContactHandler(isAdd, handleClose);

  const error = useSelector(selectContactsError);

  useEffect(() => {
    console.log("contactData", contactData);
    if (contactData) {
      const { _id, ...rest } = contactData;
      formik.setValues({ ...rest, cid: _id });
    }
  }, [contactData]);

  const loadModal = () => {
    return <Model show={loading} message="Uploading your data ..." />;
  };

  const checkFormType = (isAdd) =>
    isAdd ? (
      <div className="d-grid gap-2 mt-4 mx-auto">
        <button className="btn btn-warning" type="submit">
          Add Contact
        </button>
      </div>
    ) : (
      <div className="d-grid gap-2 mt-4 mx-auto">
        <button className="btn btn-success" type="submit">
          Update Contact
        </button>
        <button className="btn btn-danger" type="submit">
          Delete Contact
        </button>
      </div>
    );
  return (
    <div className="contactForm">
      {loading && loadModal()}
      {error && <p className="bg-danger p-2 text-light">{error}</p>}
      <form
        className="appContact__FormContainer"
        id="frm"
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          name="cid"
          className="form-control"
          {...formik.getFieldProps("cid")}
        />
        <FormField
          formik={formik}
          name={"name"}
          placeholder={"Contact name"}
          type={"text"}
          label={"Contact name"}
        />

        <FormField
          formik={formik}
          name={"email"}
          placeholder={"email address"}
          type={"email"}
          label={"Email"}
        />
        <FormField
          formik={formik}
          name={"phoneNo"}
          placeholder={"Phone number"}
          type={"number"}
          label={"Phone number"}
        />
        <FormField
          formik={formik}
          name={"address"}
          placeholder={"Address"}
          type={"text"}
          label={"Address"}
        />
        {checkFormType(isAdd)}
      </form>
    </div>
  );
};

export default Contact;
