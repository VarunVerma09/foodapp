import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store  from "./redux/Store";
import Success from "./pages/Success";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />




        
      </Routes>
   
  </BrowserRouter>
  </Provider>
);