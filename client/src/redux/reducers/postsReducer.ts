import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  posts: [],
  postById: {},
  currentPosts: [],
  filters_and_sort: {
    postulacion: "",
    location: ["Mendoza", "Buenos Aires"],
    modality: {
      onSite: false,
      hybrid: false,
      remote: false,
    },
    contractType: {
      fullTime: false,
      partTime: false,
      temporality: false,
      perHour: false,
    },
  },
  postCreateModal: { val: false, msg: "" },
};

const postsReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionType.GET_POSTS:
      return {
        ...state,
        posts: payload,
        currentPosts: payload,
      };
    case ActionType.GET_POSTS_BY_ID:
      return {
        ...state,
        postById: payload,
      };
    case ActionType.GET_CURRENT_POSTS:
      console.log(payload);
      return {
        ...state,
        currentPosts: payload,
        filters_and_sort: payload,
      };
    case ActionType.SET_POST_CREATE_MODAL:
      return {
        ...state,
        postCreateModal: payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
