import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  id: null,
  roleId: null,
  firstName: "",
  lastName: "",
  about: "",
  phoneNumber: "",
  email: "",
  country: "",
  image: "",
  showImage: false,
  skillTags: [],
  experience: [],
  education: [],
  languages: [],

  followings: [],
  favs: [],
  notifications: [],
  userCreateModal: { val: false, msg: "" },
};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_USER:
      console.log(action.payload.data);
      return {
        ...state,
        ...action.payload.data,
        userCreateModal: action.payload.modal,
      };
    case ActionType.SET_USER_CREATE_MODAL:
      return {
        ...state,
        userCreateModal: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
