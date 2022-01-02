import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import axios from "../Axios";
import { useDispatch } from "react-redux";
import { getAllContactsDetails } from "../state-management/contact/ContactAction";

const useContactHandler = (isAdd, handleClose) => {
  const postData = (path, data, resetForm) => {
    axios
      .post(path, data)
      .then((res) => {
        resetForm();
        toast.success(" data sucessfully added");
        dispatch(getAllContactsDetails(0));
      })
      .catch((err) => {
        toast.error(err?.response?.data);
        resetForm();
      });
  };

  const updateData = (path, data, resetForm) => {
    axios
      .put(path, data)
      .then((res) => {
        resetForm();
        toast.success(" data sucessfully added");
        dispatch(getAllContactsDetails(0));
        handleClose();
      })
      .catch((err) => {
        toast.error(err?.response?.data);
        resetForm();
        handleClose();
      });
  };
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNo: "",
      address: "",
      cid: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().strict().trim().required("contact name is required"),
      email: Yup.string()
        .strict()
        .trim()
        .required("email is required")
        .email("invalid email address"),
      phoneNo: Yup.number().min(9, "minimum 9 digits required"),
      address: Yup.string().strict().trim(),
      cid: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      const updateValues = Object.fromEntries(
        Object.entries(values).filter((r) => Boolean(r[1]))
      );

      isAdd
        ? postData("/contact/add", updateValues, resetForm)
        : updateData(
            `/contact/update/${updateValues?.cid}`,
            updateValues,
            resetForm
          );
    },
  });

  return { formik };
};

export default useContactHandler;
