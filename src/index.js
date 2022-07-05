import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./reducer";
import { Provider } from "react-redux";
import Admin from "./Admin";
import EditAbout from "./Admin/EditAbout";
import EditCertificate from "./Admin/EditCertificate";
import EditContact from "./Admin/EditContact";
import EditEducation from "./Admin/EditEducation";
import EditEvent from "./Admin/EditEvent";
import EditProject from "./Admin/EditProject";
import EditTech from "./Admin/EditTech";
import Home from "./Admin/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<Home />} />
          <Route path="about" element={<EditAbout />} />
          <Route path="certificate" element={<EditCertificate />} />
          <Route path="contact" element={<EditContact />} />
          <Route path="education" element={<EditEducation />} />
          <Route path="event" element={<EditEvent />} />
          <Route path="projects" element={<EditProject />} />
          <Route path="tech" element={<EditTech />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
