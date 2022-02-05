import axios from "axios";
import {Dispatch} from "redux";
import Storage from "../../../services/storage";
import {ActionType} from "../actionTypes";
import {Action} from "../index";



export const createPost =
  (dataPost: any, token: string) => async (dispatch: Dispatch<Action>) => {
    try {
      console.log("Data enviada: ", dataPost);
      console.log(token);

      let {data} = await axios.post(
        `/posts/create/${dataPost.companyId}`,
        dataPost,
        {
          headers: {
            token: token,
          },
        }
      );
      console.log("Data recibida:", data);
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
  return {type: ActionType.SET_POST_CREATE_MODAL, payload: data};
};

export const setCompanyCurrentPosts = (data: object[]) => {

  return {type: ActionType.SET_COMPANY_CURRENT_POSTS, payload: data};
};

export const editPost =
  (postId: number, endDate: string) => async (dispatch: Dispatch<Action>) => {
    try {
      let {data} = await axios.put(`/posts/update/${postId}`, {
        endDate: endDate,
      });
      //console.log(data);
      console.log("POSTS", "Se recibe data de la API");
      return dispatch({type: ActionType.EDIT_POST, payload: data});
    } catch (error) {
      console.log(error);
    }
  };

export const setFavApplicant =
  (applicantId: number, postId: number) => async (dispatch: Dispatch<Action>) => {
    try {
      let {data} = await axios.put(`/company/favorites`, {
        applicantId,
        postId
      });
      return dispatch({type: ActionType.SET_FAV_APPLICANT, payload: data.favorites});
    } catch (error) {
      console.log(error);
    }
  }

/* ---------------- */
export const sendMercadoPago = (payload: any) => {
  return async function () {
    try {
      var response = await axios.post("http://localhost:3002/api/v2/payment/checkout", payload)
      let resp = response.data.init_point;
      window.open(resp);
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateInfo = (payload: any) => {
  return async function () {
    try {
      var response = await axios.post("http://localhost:3002/api/v2/payment/checkout", payload)
      console.log('action updateInfo: ', response)
      return response;

    } catch (error) {
      console.log(error)
    }
  }
}
