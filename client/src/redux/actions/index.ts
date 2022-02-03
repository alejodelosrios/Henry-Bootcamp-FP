import { ActionType } from "./actionTypes";

interface getPosts {
  type: ActionType.GET_POSTS;
  payload: object[];
}
interface editPost {
  type: ActionType.EDIT_POST;
  payload: object;
}

interface getCurrentPosts {
  type: ActionType.GET_CURRENT_POSTS;
  payload: {
    data: object[];
    filters_and_sort: object;
  };
}

interface setCurrentPosts {
  type: ActionType.SET_CURRENT_POSTS;
  payload: object[];
}
interface set_current_items_by_page {
  type: ActionType.SET_CURRENT_ITEMS_BY_PAGE;
  payload: number;
}
interface getPostsById {
  type: ActionType.GET_POSTS_BY_ID;
  payload: object;
}

interface filterAndSort {
  type: ActionType.FILTER_AND_SORT;
  payload: object[];
}

interface setPostCreateModal {
  type: ActionType.SET_POST_CREATE_MODAL;
  payload: {
    val: Boolean;
    msg: String;
  };
}
interface setUserCreateModal {
  type: ActionType.SET_USER_CREATE_MODAL;
  payload: {
    val: Boolean;
    msg: String;
  };
}

interface getUser {
  type: ActionType.GET_USER;
  payload: {
    data: {
      id: string;
      role: string;
      email: string;
      applicant: object;
      company: object;
    };
    modal: object | boolean;
  };
}
interface setEmail {
  type: ActionType.SET_EMAIL;
  payload: string;
}
interface setUser {
  type: ActionType.SET_USER;
  payload: {
    password?: string;
    id: string;
    role: string;
    email: string;
    applicant: object;
    company: object;
  };
}

interface updateUser {
  type: ActionType.UPDATE_USER;
  payload: object;
}
interface updateMail {
  type: ActionType.UPDATE_MAIL;
  payload: string;
}
interface updateUserExp {
  type: ActionType.UPDATE_USER_EXP;
  payload: any;
}
interface addUserExp {
  type: ActionType.ADD_USER_EXP;
  payload: any;
}
interface DeleteUserExp {
  type: ActionType.DELETE_USER_EXP;
  payload: any;
}
interface updateUserEducation {
  type: ActionType.UPDATE_USER_EDUCATION;
  payload: any;
}
interface addUserEducation {
  type: ActionType.ADD_USER_EDUCATION;
  payload: any;
}
interface deleteUserEducation {
  type: ActionType.DELETE_USER_EDUCATION;
  payload: any;
}
interface updateUserLanguages {
  type: ActionType.UPDATE_USER_LANGUAGES;
  payload: any;
}
interface addUserLanguages {
  type: ActionType.ADD_USER_LANGUAGES;
  payload: any;
}
interface deleteUserLanguages {
  type: ActionType.DELETE_USER_LANGUAGES;
  payload: any;
}

interface setUserFollows {
  type: ActionType.SET_USER_FOLLOWS;
}
interface jobApplication {
  type: ActionType.JOB_APPLICATION;
  payload: object[];
}

interface getNotifications {
  type: ActionType.GET_NOTIFICATIONS;
  payload: {
    notifications: object[];
    role: string;
  };
}
interface getFavorite {
  type: ActionType.GET_FAVORITES;
  payload: object[];
}

interface setFavorites {
  type: ActionType.SET_FAVORITES;
  payload: object[];
}
interface getCompany {
  type: ActionType.GET_COMPANY;
  payload: object;
}
interface submitTags {
  type: ActionType.SUBMIT_TAGS;
  payload: any;
}

interface setFavApplicant {
  type: ActionType.SET_FAV_APPLICANT;
  payload: object[];
}

interface sendMercadoPago {
  type: ActionType.POST_MELI;
  payload: object;
}

export type Action =
  | getPosts
  | set_current_items_by_page
  | setCurrentPosts
  | editPost
  | filterAndSort
  | getPostsById
  | setPostCreateModal
  | setUserCreateModal
  | getCurrentPosts
  | setEmail
  | setUser
  | getUser
  | updateUser
  | updateMail
  | updateUserExp
  | addUserExp
  | DeleteUserExp
  | updateUserEducation
  | addUserEducation
  | deleteUserEducation
  | updateUserLanguages
  | addUserLanguages
  | deleteUserLanguages
  | setUserFollows
  | getNotifications
  | getFavorite
  | jobApplication
  | getCompany
  | setFavorites
  | submitTags
  | setFavApplicant
  | sendMercadoPago;
