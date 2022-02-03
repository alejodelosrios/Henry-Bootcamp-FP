import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "./actionTypes";
import { Action } from "./index";

export const editPost =
  (postId: number, endDate: string) => async (dispatch: Dispatch<Action>) => {
    try {
      let { data } = await axios.put(`/posts/update/${postId}`, {
        endDate: endDate,
      });
      //console.log(data);
      console.log("POSTS", "Se recibe data de la API");
      return dispatch({ type: ActionType.EDIT_POST, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const setFavApplicant =
  (applicantId: number, postId:number)=> async (dispatch: Dispatch<Action>)=>{
    try {
      let { data } = await axios.put(`/company/favorites`, {
        applicantId,
        postId
      });
      console.log('ACTION => ', data);
      console.log("POSTS", "Fav Appplicant Seted");
      return dispatch({ type: ActionType.SET_FAV_APPLICANT, payload: data.favorites });
    } catch (error) {
      console.log(error);
    }
  }

/* ---------------- */
export const sendMercadoPago =(payload:any)=>{
  return async function (){
    try {
      var response = await axios.post("http://localhost:3002/api/v2/payment/checkout", payload)
      let resp = response.data.init_point;
      window.open(resp);
    } catch (error) {
      console.log(error)
    }
  }
}
