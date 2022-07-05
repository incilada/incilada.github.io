import ActionTypes from "./action-types";
import axios from "axios";

const URL = "http://localhost:4200/data"

export const getAllData = () => (dispatch) => {
  axios
    .get(URL)
    .then((response) => {
      dispatch({ type: "GET_DATA", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "ERROR", payload: error });
      console.log("error", error);
    });
};

export const editAbout = (content) => ({
  type: ActionTypes.EDIT_ABOUT,
  payload: content,
});

export const editContact = (content) => ({
  type: ActionTypes.EDIT_CONTACT,
  payload: content,
});

export const editTech = (content) => ({
  type: ActionTypes.EDIT_TECH,
  payload: content,
});

export const editEducation = (content) => ({
  type: ActionTypes.EDIT_EDUCATION,
  payload: content,
});

export const editCertificate = (content) => ({
  type: ActionTypes.EDIT_CERTIFICATE,
  payload: content,
});

export const editEvent = (content) => ({
  type: ActionTypes.EDIT_EVENT,
  payload: content,
});

export const editProject = (content) => ({
  type: ActionTypes.EDIT_PROJECT,
  payload: content,
});
