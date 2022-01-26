import {ActionType} from "./actionTypes";

interface getPosts {
  type: ActionType.GET_POSTS;
  payload: object[];
}

interface getCurrentPosts {
  type: ActionType.GET_CURRENT_POSTS;
  payload: {
    data: object[];
    filters_and_sort: object;
  };
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
    data: object;
    modal: object;
  };
}
interface setEmail {
  type: ActionType.SET_EMAIL;
  payload: string;
}
interface setUser {
  type: ActionType.SET_USER;
  payload: object;
}

interface updateUser {
  type: ActionType.UPDATE_USER;
  payload: object;
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

export type Action =
  | getPosts
  | filterAndSort
  | getPostsById
  | setPostCreateModal
  | setUserCreateModal
  | getCurrentPosts
  | setEmail
  | setUser
  | getUser
  | updateUser
  | updateUserExp
  | addUserExp
  | DeleteUserExp
  | updateUserEducation
  | addUserEducation
  | deleteUserEducation
  | updateUserLanguages
  | addUserLanguages
  | deleteUserLanguages;
