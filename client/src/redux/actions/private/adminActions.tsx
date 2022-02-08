import axios from "axios";
import { Dispatch } from "redux";
import Storage from "../../../services/storage";
import { ActionType } from "../actionTypes";
import { Action } from "../index";

let token;

export const getCategories = () => async (dispatch: Dispatch<Action>) => {
  try {
    token = Storage.get("token");
    let { data } = await axios.get(`/category/index`, {
      headers: {
        token: token || "",
      },
    });
    return dispatch({
      type: ActionType.GET_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createCategory =
  (obj: {}) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      let { data } = await axios.post(`/category/create`, obj, {
        headers: {
          token: token || "",
        },
      });
      return dispatch({
        type: ActionType.CREATE_CATEGORY,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getUsers = () => async (dispatch: Dispatch<Action>) => {
  try {
    token = Storage.get("token");
    let { data } = await axios.get(`/user/index`, {
      headers: {
        token: token || "",
      },
    });
    return dispatch({
      type: ActionType.GET_USERS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser =
  (id: string) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      let { data } = await axios.delete(`/user/delete/${id}`, {
        headers: {
          token: token || "",
        },
      });

      return dispatch({
        type: ActionType.DELETE_USER,
        payload: data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const convertToadminRole =
  (id: number) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      let { data } = await axios.put(
        `/user/admin`,
        { userId: id },
        {
          headers: {
            token: token || "",
          },
        }
      );

      return dispatch({
        type: ActionType.CONVERT_TO_ADMIN_ROLE,
        payload: data.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const getNews = () => async (dispatch: Dispatch<Action>) => {
  try {
    token = Storage.get("token");
    let { data } = await axios.get(`/news/index`, {
      headers: {
        token: token || "",
      },
    });
    return dispatch({
      type: ActionType.GET_NEWS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const createNew = (obj: {}) => async (dispatch: Dispatch<Action>) => {
  try {
    token = Storage.get("token");
    let { data } = await axios.post(`/news/create`, obj, {
      headers: {
        token: token || "",
      },
    });
    return dispatch({
      type: ActionType.CREATE_NEW,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
