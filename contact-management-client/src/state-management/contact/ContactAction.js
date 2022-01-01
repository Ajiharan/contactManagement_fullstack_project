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
      console.log(res.data);
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

export { getAllContactsDetails };
