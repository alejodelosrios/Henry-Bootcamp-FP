import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "./actionTypes";
import { Action } from "./index";

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
  try {
    let { data } = await axios.get("/posts/index");
    //console.log(data);
    console.log("POSTS", "Se recibe data de la API");
    return dispatch({ type: ActionType.GET_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsById = (id: any) => async (dispatch: Dispatch<Action>) => {
  try {
    let { data } = await axios.get(`/posts/${id}`);
    console.log(data);
    console.log("POSTS BY ID", "Se recibe data de la API");
    return dispatch({ type: ActionType.GET_POSTS_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const filterAndSort =
  (filters_and_sort: any) => async (dispatch: Dispatch<Action>) => {
    try {
      let { data } = await axios({
        method: "POST",
        url: `/posts/filter`,
        data: filters_and_sort,
      });
      console.log("POSTS FILTRADOS", "Se recibe data de la API");
      return dispatch({
        type: ActionType.GET_CURRENT_POSTS,
        payload: {
          data: data,
          filters_and_sort: { ...filters_and_sort, inputName: "" },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const createPost =
  (dataPost: any) => async (dispatch: Dispatch<Action>) => {
    try {
      console.log(dataPost);

      await axios.post(`/posts/create`, dataPost);
      console.log("CREATE POST", "Se envió la data a la API");
      return dispatch({
        type: ActionType.SET_POST_CREATE_MODAL,
        payload: {
          val: true,
          msg: `The job post ${dataPost.title} was created successfully!`,
        },
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type: ActionType.SET_POST_CREATE_MODAL,
        payload: {
          val: true,
          msg: `The job post ${dataPost.title}, couldn't be created!`,
        },
      });
    }
  };
export const setPostCreateModal = (data: any) => {
  return { type: ActionType.SET_POST_CREATE_MODAL, payload: data };
};
export const setUserCreateModal = (data: any) => {
  return { type: ActionType.SET_USER_CREATE_MODAL, payload: data };
};

export const createUser = (data: any) => async (dispatch: Dispatch<Action>) => {
  console.log(data);
  try {
    const response = await axios.post(`/user/create`, data);
    console.log(response);
    console.log("CREATE USER", "Se envió la data a la API");
    return dispatch({
      type: ActionType.GET_USER,
      payload: {
        data: response.data,
        modal: {
          val: true,
          msg: `The user ${data.email} was created successfully!`,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return dispatch({
      type: ActionType.SET_POST_CREATE_MODAL,
      payload: {
        val: true,
        msg: `The user ${data.email}, couldn't be created!`,
      },
    });
  }
};
export const getUser =
  (userData: any) => async (dispatch: Dispatch<Action>) => {
    try {
      let { data } = await axios.get(`/user/${userData.email}`);
      console.log("Información actualizada");
      console.log(data);
      return dispatch({
        type: ActionType.GET_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const setUser =
  (userData: any) =>{
    return {
      type: ActionType.SET_USER,
      payload: userData,
    }
  };

export const updateUser =
  (userData: any) => async (dispatch: Dispatch<Action>) => {
    try {
      // await axios.post(`/user/update`, userData);
      console.log("Información actualizada");
      return dispatch({
        type: ActionType.UPDATE_USER,
        payload: userData,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const setEmail =
  (email: string) => async (dispatch: Dispatch<Action>) => {
    return dispatch({
      type: ActionType.SET_EMAIL,
      payload: email,
    });
  };
