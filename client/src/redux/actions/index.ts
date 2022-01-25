import { ActionType } from "./actionTypes";

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

export type Action =
  | getPosts
  | filterAndSort
  | getPostsById
  | setPostCreateModal
  | setUserCreateModal
  | getCurrentPosts
  | getUser;
