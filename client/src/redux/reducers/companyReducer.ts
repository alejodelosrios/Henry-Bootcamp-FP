import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  companyDetail: {
    id: null,
    userId: null,
    name: "",
    legalName: "",
    stin: "",
    companyLogo: "",
    images: [],
    values: [],
    aboutValues: "",
    about: "",
    mission: "",
    vision: "",
    location: "",
    accountManagers: [],
    notifications: [],
    reviews: [],
    posts: [],
    followers: [],
  },
};

const companyReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_COMPANY:
      //console.log(action.payload);
      return {
        ...state,
        companyDetail: { ...state.companyDetail, ...action.payload },
      };
    case ActionType.POST_MELI: {
        return {
          ...state,
        };
      }
    case ActionType.UPDATE_PREMIUM: {
        return {
          ...state,
        };
      }
    default:
      return state;
  }
};

export default companyReducer;
