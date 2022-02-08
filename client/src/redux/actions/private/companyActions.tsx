import axios from "axios";
import {Dispatch} from "redux";
import Storage from "../../../services/storage";
import {ActionType} from "../actionTypes";
import {Action} from "../index";

let token: any;

export const createPost =
  (dataPost: any, tokenId: string) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      let {data} = await axios.post(
        `/posts/create/${dataPost.companyId}`,
        dataPost,
        {
          headers: {
            token: tokenId,
          },
        }
      );
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
      token = Storage.get("token");
      let {data} = await axios.put(`/posts/update/${postId}`, {
        endDate: endDate,
      },
        {
          headers: {
            token: token || "",
          },
        }
      );
      return dispatch({type: ActionType.EDIT_POST, payload: data});
    } catch (error) {
      console.log(error);
    }
  };

export const setFavApplicant =
  (applicantId: number, postId: number) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      let {data} = await axios.put(`/company/favorites`, {
        applicantId,
        postId
      },
        {
          headers: {
            token: token || "",
          },
        }
      );
      return dispatch({type: ActionType.SET_FAV_APPLICANT, payload: data.favorites});
    } catch (error) {
      console.log(error);
    }
  }

/* ---------------- */
export const sendMercadoPago = (payload: any) => {
  return async function () {
    try {
      token = Storage.get("token");
      var response = await axios.post("http://localhost:3002/api/v2/company/payment/checkout", payload,
        {
          headers: {
            token: token || "",
          },
        }
      )
      let resp = response.data.init_point;
      window.open(resp);
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateInfo = (payload: any) => {
  return async function (dispatch: Dispatch<Action>) {
    try {
      token = Storage.get("token");
      var response = await axios.post("http://localhost:3002/api/v2/company/payment/payment", payload,
        {
          headers: {
            token: token || "",
          },
        }
      )
      return dispatch({
        type: ActionType.UPDATE_PREMIUM,
        payload: response.data.premium,
      });

    } catch (error) {
      console.log(error)
    }
  }
}

export const editCompany =
  (companyData: object, companyId: number) =>
    async (dispatch: Dispatch<Action>) => {
      try {
        token = Storage.get("token");
        const {data} = await axios.put(
          `/company/update/${companyId}`,
          companyData,
          {
            headers: {
              token: token || "",
            },
          }
        );
        return dispatch({
          type: ActionType.EDIT_COMPANY,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    export const getPremiums = () => async (dispatch: Dispatch<Action>) => {
      try {
        token = Storage.get("token");
        let { data } = await axios.get(`http://localhost:3002/api/v2/company/premium`, {
          headers: {
            token: token || "",
          },
        });
        console.log('esto es data:',data)
        return dispatch({
          type: ActionType.GET_PREMIUMS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };