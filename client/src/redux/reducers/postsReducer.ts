import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  posts: [],
  postById: {},
  currentPosts: [],
  filters_and_sort: {
    inputName: "",
    categories: [],
    score: "",
    orderBy: "",
    location: {
      city: [],
    },
    modality: {
      onSite: false,
      hybrid: false,
      remote: false,
    },
    contractType: {
      fullTime: false,
      partTime: false,
      temporary: false,
      perHour: false,
    },
  },
  postCreateModal: { val: false, msg: "" },
};

const postsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        currentPosts: action.payload,
      };
    case ActionType.GET_POSTS_BY_ID:
      return {
        ...state,
        postById: action.payload,
      };
    case ActionType.GET_CURRENT_POSTS:
      console.log(action.payload);
      return {
        ...state,
        currentPosts: action.payload.data,
        filters_and_sort: action.payload.filters_and_sort,
      };
    case ActionType.SET_POST_CREATE_MODAL:
      return {
        ...state,
        postCreateModal: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
