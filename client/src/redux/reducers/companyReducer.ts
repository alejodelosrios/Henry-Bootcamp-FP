import {Action} from "../actions";
import {ActionType} from "../actions/actionTypes";

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
  applicantDetail: {
    email: "",
    id: null,
    userId: null,
    firstName: "",
    lastName: "",
    about: "",
    phoneNumber: "",
    country: "",
    image: "",
    showImage: true,
    experience: [],
    education: [],
    languages: [],
    skillTags: [],
    notifications: [],
    followed: [],
    postulations: [],
    favorites: [],
  },
};

const companyReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_COMPANY:
      return {
        ...state,
        companyDetail: {...state.companyDetail, ...action.payload},
      };
    case ActionType.EDIT_COMPANY:
      return {
        ...state,
        companyDetail: action.payload,
      };
    case ActionType.POST_MELI:
      return {
        ...state,
      };
    case ActionType.SET_APPLICANT_DETAIL: {
      return {
        ...state,
        applicantDetail: action.payload,
      };
    }
    default:
      return state;
  }
};

export default companyReducer;
