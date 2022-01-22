import { ActionType } from "./actionTypes";

interface getPosts {
  type: ActionType.GET_POSTS;
  payload: Object[];
}

interface getCurrentPosts {
  type: ActionType.GET_CURRENT_POSTS;
  payload: {
    data: Object[];
    filters_and_sort: Object;
  };
}

interface getPostsById {
  type: ActionType.GET_POSTS_BY_ID;
  payload: Object;
}

interface filterAndSort {
  type: ActionType.FILTER_AND_SORT;
  payload: Object[];
}

interface setPostCreateModal {
  type: ActionType.SET_POST_CREATE_MODAL;
  payload: {
    val: Boolean;
    msg: String;
  };
}

export type Action =
  | getPosts
  | filterAndSort
  | getPostsById
  | setPostCreateModal
  | getCurrentPosts;
