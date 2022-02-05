import axios from "axios";
import {Dispatch} from "redux";
import Storage from "../../../services/storage";
import {ActionType} from "../actionTypes";
import {Action} from "../index";

const token = Storage.get("token");

export const jobApplication =
  (obj: object) => async (dispatch: Dispatch<Action>) => {
    try {
      let {data} = await axios.put(`/applicant/apply`, obj);
      //const { notification } = await axios.put(`/applicant/apply`, obj);
      data = data && data.postulation.postulations;
      //console.log(data);
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
      let {data}: any = await axios.get(`/${role}/${applicantId}`,
        {
          headers: {
            token: token || "",
          },
        }
      );
      //console.log("Favoritos actualizados");
      return dispatch({
        type: ActionType.GET_FAVORITES,
        payload: data.favorites,
      });
    } catch (error) {
      console.log("Ups! algo salió mal");
      console.log(error);
    }
  };

export const setFavorite =
  (applicantId: number, postId: number) =>
    async (dispatch: Dispatch<Action>) => {
      try {
        let {data}: any = await axios.put(`/applicant/favorite`, {
          applicantId,
          postId,
        });
        getFavorite("applicant", applicantId);
        return dispatch({
          type: ActionType.SET_FAVORITES,
          payload: data,
        });
      } catch (error) {
        console.log("Ups! algo salió mal");
        console.log(error);
      }
    };

export const setApplicantDetail =
  (applicantId: number) =>
    async (dispatch: Dispatch<Action>) => {
      //console.log("Data enviada: ", applicantId);
      try {
        const {data} = await axios.get(
          `/applicant/${applicantId}`,
          {
            headers: {
              token: token || "",
            },
          }
        );
        //console.log("Data recibida: ", data);
        console.log("Información actualizada");
        return dispatch({
          type: ActionType.SET_APPLICANT_DETAIL,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
