import axios from "axios";
import {Dispatch} from "redux";
import Storage from "../../../services/storage";
import {ActionType} from "../actionTypes";
import {Action} from "../index";

let token:any;
export const getUser =
  (userData?: any) => async (dispatch: Dispatch<Action>) => {
    //console.log("Data enviada: ", userData);
    try {
      token = Storage.get("token");
      let res;
      if (token) {
        res = await axios.post(`/user/login`, userData,
          {
            headers: {
              token: token,
            },
          }
        );
      } else {
        res = await axios.post(`/user/login`, userData);
        const {token} = res.data;
        Storage.set('token', token);
      }
      const data = res.data;
      //console.log("Información actualizada");
      //console.log("Data recibida: ", data);
      return dispatch({
        type: ActionType.GET_USER,
        payload: {
          data: data,
          modal: false,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };


export const setUser = (userData: any) => {
  return {
    type: ActionType.SET_USER,
    payload: userData,
  };
};

export const createUser =
  (userData: any) => async (dispatch: Dispatch<Action>) => {
    console.log("Data enviada: ", userData);
    try {
      let {data} = await axios.post(`/user/register`, userData);
      console.log("Respuesta:", data);

      const {token} = data;
      Storage.set('token', token);
      // let resCreate = await axios.post(`/user/create`, userData);
      // console.log(resCreate.data);

      // let resGet = await axios.get(`/user/${userData.email}`);
      // console.log(resGet.data);

      //console.log("Data recibida: ",data );
      console.log("CREATE USER", "Se envió la data a la API");
      return dispatch({
        type: ActionType.GET_USER,
        payload: {
          data: data,
          modal: {
            val: true,
            msg: `The user ${userData.email} was created successfully!`,
          },
        },
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ActionType.SET_POST_CREATE_MODAL,
        payload: {
          val: true,
          msg: `The user ${userData.email}, couldn't be created!`,
        },
      });
    }
  };

export const setUserCreateModal = (data: any) => {
  return {type: ActionType.SET_USER_CREATE_MODAL, payload: data};
};

export const getCompany =
  (companyId: string | undefined) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      let {data}: any = await axios.get(`/company/${companyId}`, {
        headers: {
          token: token,
        },
      });
      return dispatch({
        type: ActionType.GET_COMPANY,
        payload: data,
      });
    } catch (error) {
      console.log("Ups! algo salió mal");
      console.log(error);
    }
  };
