import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "./actionTypes";
import { Action } from "./index";

export const jobApplication =
  (obj: object) => async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.post(`/applicant/apply`, obj);
      console.log("Informaciónctualizada");
      return dispatch({
        type: ActionType.JOB_APPLICATION,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };