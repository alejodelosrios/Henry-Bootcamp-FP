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
