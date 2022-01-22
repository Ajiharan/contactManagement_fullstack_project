import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header/Header";
import "react-loading-skeleton/dist/skeleton.css";
import Home from "./home/Home";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllContactsDetails } from "./state-management/contact/ContactAction";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContactsDetails(0));
  }, []);
  return (
    <div className="App">
      <Toaster />
      <Header />
      <Home />
    </div>
  );
}

export default App;
