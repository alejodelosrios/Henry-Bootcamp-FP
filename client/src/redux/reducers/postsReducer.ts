import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  posts: [],
  postById: {},
  currentPosts: [],
};

//This is just Test Data, don't forget to delete it!!!
const testData = [
  {
    name: "pirulo",
    id: "pirulo",
  },
  {
    name: "rosita",
    id: "rosita",
  },
];

const reducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionType.GET_POSTS:
      return { ...state, posts: testData };

    case ActionType.GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case ActionType.GET_POSTS_BY_ID:
      return {
        ...state,
        postById: payload,
      };
    case ActionType.FILTER_AND_SORT:
      return {
        ...state,
        currentPosts: payload,
      };
    default:
      return state;
  }
};

export default reducer;
