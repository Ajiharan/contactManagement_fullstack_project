import React, { useState, useEffect } from "react";
import Model from "../modal/Model";
import useContactHandler from "../hooks/useContactHandler";
import { selectContactsError } from "../state-management/contact/ContactSlice";
import { useSelector } from "react-redux";
import FormField from "../common/FormField";

const Contact = ({ isAdd, contactData, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const { formik, deleteContact } = useContactHandler(
    isAdd,
    handleClose,
    loading,
    setLoading
  );

  const error = useSelector(selectContactsError);

  useEffect(() => {
    if (contactData) {
      const { _id, ...rest } = Object.fromEntries(
        Object.entries(contactData).map((r) => {
          return [r[0], Boolean(r[1]) ? r[1] : ""];
        })
      );
      formik.setValues({ ...rest, cid: _id });
    }
    return () => {
      setLoading(false);
    };
  }, [contactData]);

  const loadModal = () => {
    return <Model show={loading} message="loading ..." />;
  };

  const handleRemove = (id) => {
    setLoading(true);
    deleteContact(id);
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
        <button
          onClick={() => {
            handleRemove(contactData?._id);
          }}
          className="btn btn-danger"
          type="button"
        >
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
          type="hidden"
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
