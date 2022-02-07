import axios from "axios";
import {Dispatch} from "redux";
import {ActionType} from "../actionTypes";
import {Action} from "../index";

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
  try {
    let {data} = await axios.get("/posts/index");
    return dispatch({type: ActionType.GET_POSTS, payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const getPostsById = (id: any) => async (dispatch: Dispatch<Action>) => {
  try {
    let {data} = await axios.get(`/posts/${id}`);
    return dispatch({type: ActionType.GET_POSTS_BY_ID, payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const set_current_items_by_page = (data: number) => {
  return {type: ActionType.SET_CURRENT_ITEMS_BY_PAGE, payload: data};
};

export const filterAndSort =
  (filters_and_sort: any) => async (dispatch: Dispatch<Action>) => {
    try {
      let {data} = await axios({
        method: "POST",
        url: `/posts/filter`,
        data: filters_and_sort,
      });
      return dispatch({
        type: ActionType.GET_CURRENT_POSTS,
        payload: {
          data: data,
          filters_and_sort: {...filters_and_sort},
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
