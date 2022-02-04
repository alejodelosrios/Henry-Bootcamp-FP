import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "./actionTypes";
import { Action } from "./index";

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
  try {
    let { data } = await axios.get("/posts/index");
    //console.log(data);
    //console.log("POSTS", "Se recibe data de la API");
    return dispatch({ type: ActionType.GET_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsById = (id: any) => async (dispatch: Dispatch<Action>) => {
  try {
    let { data } = await axios.get(`/posts/${id}`);
    //console.log(data);
    //console.log("POSTS BY ID", "Se recibe data de la API");
    return dispatch({ type: ActionType.GET_POSTS_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const set_current_items_by_page = (data: number) => {
  return { type: ActionType.SET_CURRENT_ITEMS_BY_PAGE, payload: data };
};

export const setCurrentPosts = (data: object[]) => {

  return { type: ActionType.SET_CURRENT_POSTS, payload: data };
};

export const filterAndSort =
  (filters_and_sort: any) => async (dispatch: Dispatch<Action>) => {
    //console.log("Data enviada: ", filters_and_sort);
    try {
      let { data } = await axios({
        method: "POST",
        url: `/posts/filter`,
        data: filters_and_sort,
      });
      //console.log("Data recibida: ", data);
      console.log("POSTS FILTRADOS", "Se recibe data de la API");
      return dispatch({
        type: ActionType.GET_CURRENT_POSTS,
        payload: {
          data: data,
          filters_and_sort: { ...filters_and_sort },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const createPost =
  (dataPost: any, token: string) => async (dispatch: Dispatch<Action>) => {
    try {
      console.log("Data enviada: ", dataPost);
      console.log(token);

      let { data } = await axios.post(
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
  return { type: ActionType.SET_POST_CREATE_MODAL, payload: data };
};
export const setUserCreateModal = (data: any) => {
  return { type: ActionType.SET_USER_CREATE_MODAL, payload: data };
};

export const createUser =
  (userData: any) => async (dispatch: Dispatch<Action>) => {
    console.log("Data enviada: ", userData);
    try {
      let { data } = await axios.post(`/user/register`, userData);
      console.log(data);

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
export const getUser =
  (userData: any) => async (dispatch: Dispatch<Action>) => {
    //console.log("Data enviada: ", userData);
    try {
      let { data } = await axios.post(`/user/login`, userData);
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
      await axios.put(`/applicant/update/${userId}`, userData);
      console.log("Información actualizada");
      return dispatch({
        type: ActionType.UPDATE_USER,
        payload: userData,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateUserExp =
  (userExp: any) => async (dispatch: Dispatch<Action>) => {
    try {
      await axios.put(`/experience/update/${userExp.id}`, userExp);
      console.log("Información actualizada");
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
      await axios.post(`/experience/create/${userId}`, userExp);
      console.log("Información actualizada");
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
      console.log(id);
      await axios.delete(`/experience/delete/${id}`);
      console.log("Información actualizada");
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
      await axios.put(`/education/update/${userEducation.id}`, userEducation);
      console.log("Información actualizada");
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
      await axios.post(`/education/create/${userId}`, userEducation);
      console.log("Información actualizada");
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
      await axios.delete(`/education/delete/${id}`);
      console.log("Información actualizada");
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
      await axios.put(`/language/update/${userLanguages.id}`, userLanguages);
      console.log("Información actualizada");
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
      await axios.post(
        `/language/create/${userLanguages.applicantId}`,
        userLanguages
      );
      console.log("Información actualizada");
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
      await axios.delete(`/language/delete/${id}`);
      console.log("Información actualizada");
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
      console.log("Información actualizada");
      return dispatch({
        type: ActionType.SET_USER_FOLLOWS,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getNotifications =
  (role: string, applicantId: number) => async (dispatch: Dispatch<Action>) => {
    try {
      let { data }: any = await axios.get(`/${role}/${applicantId}`);
      //console.log("Notifications actualizadas");
      return dispatch({
        type: ActionType.GET_NOTIFICATIONS,
        payload: {
          notifications: data.notifications,
          role: role,
        },
      });
    } catch (error) {
      console.log("Ups! algo salió mal");
      console.log(error);
    }
  };

export const getCompany =
  (companyId: string | undefined) => async (dispatch: Dispatch<Action>) => {
    try {
      let { data }: any = await axios.get(`/company/${companyId}`);
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
      const { data } = await axios.put(
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
export const setApplicantDetail =
  (applicantId: number) =>
  async (dispatch: Dispatch<Action>) => {
    //console.log("Data enviada: ", applicantId);
    try {
      const { data } = await axios.get(
        `/applicant//${applicantId}`
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
