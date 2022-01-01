import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";

import contactsReducer from "./contact/ContactSlice";

const appReducer = combineReducers({
  contact: contactsReducer,
});

const rootReducer = (state, action) => {
  //future signout functionality added
  // if (action.type === "user/setSignOut") {
  //   return appReducer(undefined, action);
  // }

  return appReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
