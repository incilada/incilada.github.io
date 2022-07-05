import { configureStore } from "@reduxjs/toolkit";
import ActionTypes from "../action/action-types";
import data from "../assets/data/db.json";
import { CryptoService } from "../cryptoService";

const cryptoService = new CryptoService();

let localStorageData = localStorage.getItem("data");
if (!localStorageData) {
  localStorage.setItem(
    "data",
    cryptoService.encrypt(JSON.stringify(data.data))
  );
}

const INITIAL_STATE = JSON.parse(
  cryptoService.decrypt(localStorage.getItem("data"))
);

const reducer = (state = INITIAL_STATE, action) => {
  let newState = state;
  switch (action.type) {
    case ActionTypes.GET_DATA:
      newState = { ...action.payload };
      break;
    case ActionTypes.EDIT_ABOUT:
      newState = { ...state, about: action.payload };
      break;
    case ActionTypes.EDIT_CONTACT:
      newState = { ...state, contactInfo: action.payload };
      break;
    case ActionTypes.EDIT_TECH:
      newState = { ...state, technologies: action.payload };
      break;
    case ActionTypes.EDIT_EDUCATION:
      newState = { ...state, education: action.payload };
      break;
    case ActionTypes.EDIT_PROJECT:
      newState = { ...state, projects: action.payload };
      break;
    case ActionTypes.EDIT_CERTIFICATE:
      newState = { ...state, certificates: action.payload };
      break;
    case ActionTypes.EDIT_EVENT:
      newState = { ...state, events: action.payload };
      break;
    default:
      newState = state;
      break;
  }
  localStorage.setItem("data", cryptoService.encrypt(JSON.stringify(state)));
  return newState;
};

export default configureStore({
  reducer
});
