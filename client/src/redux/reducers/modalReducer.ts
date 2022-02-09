import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  modal: {
    title: "",
    message: "",
    open: false,
  },
};

const modalReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_MODAL:
      console.log(action.payload);
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
