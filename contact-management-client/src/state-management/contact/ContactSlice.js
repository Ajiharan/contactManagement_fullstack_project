import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactData: [],
  loading: true,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    getContactsLoading: (state) => {
      state.loading = true;
      state.contactData = [];
      state.error = null;
    },
    getContactsSucess: (state, action) => {
      state.loading = false;
      state.contactData = action.payload.data;
      state.error = null;
    },
    getContactsFailure: (state, action) => {
      state.loading = false;
      state.contactData = [];
      state.error = action.payload.error;
    },
  },
});

export const { getContactsFailure, getContactsLoading, getContactsSucess } =
  contactSlice.actions;

export const selectContactsDetails = (state) => state?.contact?.contactData;

export const selectContactsLoading = (state) => state?.contact?.loading;

export const selectContactsError = (state) => state.contact.error;
export default contactSlice.reducer;
