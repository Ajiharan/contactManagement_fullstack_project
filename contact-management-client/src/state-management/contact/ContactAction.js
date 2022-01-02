import axios from "../../Axios";
import {
  getContactsFailure,
  getContactsLoading,
  getContactsSucess,
} from "./ContactSlice";

const getAllContactsDetails = (count) => (dispatch) => {
  dispatch(getContactsLoading());
  axios
    .get(`contact/getData/${count}`)
    .then((res) => {
      dispatch(
        getContactsSucess({
          data: res.data,
        })
      );
    })
    .catch((err) => {
      dispatch(
        getContactsFailure({
          error: err.response,
        })
      );
    });
};

const getAllSearchDetails = (searchData) => (dispatch) => {
  dispatch(getContactsLoading());
  axios
    .post("contact/search", searchData)
    .then((res) => {
      dispatch(
        getContactsSucess({
          data: res.data,
        })
      );
    })
    .catch((err) => {
      dispatch(
        getContactsFailure({
          error: err.response,
        })
      );
    });
};

export { getAllContactsDetails, getAllSearchDetails };
