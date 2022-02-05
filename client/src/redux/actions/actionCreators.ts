import axios from "axios";
import {Dispatch} from "redux";
import Storage from "../../services/storage";
import {ActionType} from "./actionTypes";
import {Action} from "./index";

const token = Storage.get("token");





export const setUserFollows =
  (compId: number, userId: number) => async (dispatch: Dispatch<Action>) => {
    try {
      // await axios.delete(`/user/update`, userExp);
      console.log("Información actualizada");
      return dispatch({
        type: ActionType.SET_USER_FOLLOWS,
      });
    } catch (error) {
      console.log(error);
    }
  };


export const getCompany =
  (companyId: string | undefined) => async (dispatch: Dispatch<Action>) => {
    try {
      let {data}: any = await axios.get(`/company/${companyId}`);
      return dispatch({
        type: ActionType.GET_COMPANY,
        payload: data,
      });
    } catch (error) {
      console.log("Ups! algo salió mal");
      console.log(error);
    }
  };

export const submitTags =
  (skillTags: any) => async (dispatch: Dispatch<Action>) => {
    try {
      // await axios.put(`/update/:17`, {skillTags});
      console.log("Información actualizada");
      return dispatch({
        type: ActionType.SUBMIT_TAGS,
        payload: skillTags,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const editCompany =
  (companyData: object, companyId: number) =>
    async (dispatch: Dispatch<Action>) => {
      //console.log("Data enviada: ", companyData);
      try {
        const {data} = await axios.put(
          `/company/update/${companyId}`,
          companyData
        );
        //console.log("Data recibida: ", data);
        console.log("Información actualizada");
        return dispatch({
          type: ActionType.EDIT_COMPANY,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
