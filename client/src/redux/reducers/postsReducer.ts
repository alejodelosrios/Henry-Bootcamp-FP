import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  posts: [],
  postById: {},
  currentPosts: [],
  filters_and_sort: {
    inputNames: [],
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

  itemsPerPage: 3,
  currentPage: 1,
  currentItems: [],
};

const postsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        currentPosts: action.payload,
        currentItems: action.payload.slice(0, state.itemsPerPage),
      };
    case ActionType.GET_POSTS_BY_ID:
      return {
        ...state,
        postById: action.payload,
      };
    case ActionType.GET_CURRENT_POSTS:
      return {
        ...state,
        currentPosts: action.payload.data,
        filters_and_sort: action.payload.filters_and_sort,
        currentPage: 1,
        currentItems: action.payload.data.slice(0,state.itemsPerPage),
      };
    case ActionType.SET_POST_CREATE_MODAL:
      return {
        ...state,
        postCreateModal: action.payload,
      };
    case ActionType.SET_FAV_APPLICANT:
      return {
        ...state,
        postById: { ...state.postById, favorites: action.payload },
      };
    case ActionType.SET_CURRENT_ITEMS_BY_PAGE:
      let currentPageLocal = action.payload;
      let indexOfLastItem = currentPageLocal * state.itemsPerPage;
      let indexOfFirstItem = indexOfLastItem - state.itemsPerPage;
      let currentItemsLocal = state.currentPosts.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
      return {
        ...state,
        currentPage: currentPageLocal,
        currentItems: currentItemsLocal,
      };
    case ActionType.SET_CURRENT_POSTS:
      return {
        ...state,
        currentPosts: action.payload,
        currentPage: 1,
      };

    default:
      return state;
  }
};

export default postsReducer;
