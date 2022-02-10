import axios from "axios";
import { Dispatch } from "redux";
import Storage from "../../../services/storage";
import { ActionType } from "../actionTypes";
import { Action } from "../index";

let token;

export const jobApplication =
  (obj: object) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      let { data } = await axios.put(`/applicant/apply`, obj, {
        headers: {
          token: token || "",
        },
      });
      //const { notification } = await axios.put(`/applicant/apply`, obj);
      data = data && data.postulation.postulations;
      //console.log(data);
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
      token = Storage.get("token");
      let { data }: any = await axios.get(`/${role}/${applicantId}`, {
        headers: {
          token: token || "",
        },
      });
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
      token = Storage.get("token");
      let { data }: any = await axios.put(
        `/applicant/favorite`,
        {
          applicantId,
          postId,
        },
        {
          headers: {
            token: token || "",
          },
        }
      );
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
  (applicantId: number) => async (dispatch: Dispatch<Action>) => {
    //console.log("Data enviada: ", applicantId);
    try {
      token = Storage.get("token");
      const { data } = await axios.get(`/applicant/${applicantId}`, {
        headers: {
          token: token || "",
        },
      });
      //console.log("Data recibida: ", data);
      return dispatch({
        type: ActionType.SET_APPLICANT_DETAIL,
        payload: data,
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

export const updateUser =
  (userData: any, userId: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.put(`/applicant/update/${userId}`, userData, {
        headers: {
          token: token || "",
        },
      });
      return dispatch({
        type: ActionType.UPDATE_USER,
        payload: userData,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateImg =
  (showImage:any, userId: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.put(`/applicant/update/${userId}`, showImage, {
        headers: {
          token: token || "",
        },
      });
      console.log('showimg:', showImage)
      return dispatch({
        type: ActionType.UPDATE_IMG,
        payload: showImage,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateUserExp =
  (userExp: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.put(`/applicant/experience/update/${userExp.id}`, userExp, {
        headers: {
          token: token || "",
        },
      });
      return dispatch({
        type: ActionType.UPDATE_USER_EXP,
        payload: userExp,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const addUserExp =
  (userExp: any, userId: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.post(`/applicant/experience/create/${userId}`, userExp, {
        headers: {
          token: token || "",
        },
      });
      return dispatch({
        type: ActionType.ADD_USER_EXP,
        payload: userExp,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteUserExp =
  (id: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.delete(`/applicant/experience/delete/${id}`, {
        headers: {
          token: token || "",
        },
      });
      return dispatch({
        type: ActionType.DELETE_USER_EXP,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateUserEducation =
  (userEducation: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.put(
        `/applicant/education/update/${userEducation.id}`,
        userEducation,
        {
          headers: {
            token: token || "",
          },
        }
      );
      return dispatch({
        type: ActionType.UPDATE_USER_EDUCATION,
        payload: userEducation,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const addUserEducation =
  (userEducation: any, userId: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.post(`/applicant/education/create/${userId}`, userEducation, {
        headers: {
          token: token || "",
        },
      });
      return dispatch({
        type: ActionType.ADD_USER_EDUCATION,
        payload: userEducation,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteUserEducation =
  (id: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.delete(`/applicant/education/delete/${id}`, {
        headers: {
          token: token || "",
        },
      });
      return dispatch({
        type: ActionType.DELETE_USER_EDUCATION,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateUserLanguages =
  (userLanguages: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.put(
        `/applicant/language/update/${userLanguages.id}`,
        userLanguages,
        {
          headers: {
            token: token || "",
          },
        }
      );
      return dispatch({
        type: ActionType.UPDATE_USER_LANGUAGES,
        payload: userLanguages,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const addUserLanguages =
  (userLanguages: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.post(
        `applicant/language/create/${userLanguages.applicantId}`,
        userLanguages,
        {
          headers: {
            token: token || "",
          },
        }
      );
      return dispatch({
        type: ActionType.ADD_USER_LANGUAGES,
        payload: userLanguages,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteUserLanguages =
  (id: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.delete(`/applicant/language/delete/${id}`, {
        headers: {
          token: token || "",
        },
      });
      return dispatch({
        type: ActionType.DELETE_USER_LANGUAGES,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const setUserFollows =
  (compId: number, userId: number) => async (dispatch: Dispatch<Action>) => {
    try {
      // await axios.delete(`/user/update`, userExp);
      return dispatch({
        type: ActionType.SET_USER_FOLLOWS,
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const postReview =
  (review: any, companyId: any) => async (dispatch: Dispatch<Action>) => {
    try {
      token = Storage.get("token");
      await axios.post(
        `applicant/review/${companyId}`,
        review,
        {
          headers: {
            token: token || "",
          },
        }
      );
      return dispatch({
        type: ActionType.POST_REVIEW,
        payload: review,
      });
    } catch (error) {
      console.log(error);
    }
  };
