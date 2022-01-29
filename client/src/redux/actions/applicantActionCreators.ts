import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "./actionTypes";
import { Action } from "./index";

export const jobApplication =
  (obj: object) => async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await axios.put(`/applicant/apply`, obj);
      console.log("Informaciónctualizada");
      return dispatch({
        type: ActionType.JOB_APPLICATION,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const getFavorite = 
  (role: string, applicantId: number) => async (dispatch: Dispatch<Action>) => {
    try {
      let {data}:any = await axios.get(`/${role}/${applicantId}`);
      console.log("Favoritos actualizados");
      return dispatch({
        type: ActionType.GET_FAVORITES,
        payload: data.favorites
      });
    } catch (error) {
      console.log('Ups! algo salió mal');
      console.log(error);
    }
  }

  export const setFavorite = 
    (applicantId:number, postId:number) => async (dispatch: Dispatch<Action>)=>{
      try {
        let {data}: any = await axios.put(`/applicant/favorite`, {applicantId, postId});
        getFavorite('applicant', applicantId);
        return dispatch({
          type: ActionType.SET_FAVORITES,
          payload: data
        });
      } catch (error) {
        console.log('Ups! algo salió mal');
        console.log(error);
      }
    }
