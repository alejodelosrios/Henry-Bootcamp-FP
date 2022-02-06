import axios from "axios";
import {useSelector} from "react-redux";
import {Dispatch} from "redux";
import Storage from "../../../services/storage";
import {ActionType} from "../actionTypes";
import {Action} from "../index";

const token = Storage.get("token");

export const createPost =
  (dataPost: any, tokenId: string) => async (dispatch: Dispatch<Action>) => {
    try {
      console.log("Data enviada: ", dataPost);
      console.log(token);

      let {data} = await axios.post(
        `/posts/create/${dataPost.companyId}`,
        dataPost,
        {
          headers: {
            token: tokenId,
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
      },
        {
          headers: {
            token: token || "",
          },
        }
      );
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
    console.log('updateInfo: ',payload)
    console.log('token: ',token)
    try {
      var response = await axios.post("http://localhost:3002/api/v2/company/payment/payment", payload,
        {
          headers: {
            token: token || "",
          },
        }
      )
      console.log('action updateInfo: ', response)
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
      console.log("token: ", token)
      console.log("Data enviada: ", companyData);
      try {
        const {data} = await axios.put(
          `/company/update/${companyId}`,
          companyData,
          {
            headers: {
              token: token || "",
            },
          }
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
