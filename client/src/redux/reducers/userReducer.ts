import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";

const initialState = {
  id: null,
  role: "",
  email: "",
  company:null,
  applicant: null,

  firstName: "",
  lastName: "",
  about: "",
  phoneNumber: "",
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
  postulations: [],
  userCreateModal: { val: false, msg: "" },
};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_USER:
      //console.log("Reducer: ",action.payload);
      if (action.payload.modal) {
        return {
          ...state,
          ...action.payload.data,
          userCreateModal: action.payload.modal,

        };
      }
      return {
        ...state,
        ...action.payload,
      };

    case ActionType.SET_USER_CREATE_MODAL:
      return {
        ...state,
        userCreateModal: action.payload,
      };
    case ActionType.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ActionType.SET_USER:
      //console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
      case ActionType.UPDATE_USER:
      return {
        ...state,
        ...action.payload
      };
    case ActionType.UPDATE_USER_EXP:
      return {
        ...state,
        experience: state.experience.map((exp: any) => {
          if (exp.id === action.payload.id) {
            exp = action.payload
          }
          return exp
        })
      };
    case ActionType.ADD_USER_EXP:
      return {
        ...state,
        experience: [...state.experience, action.payload]
      }
    case ActionType.DELETE_USER_EXP:
      return {
        ...state,
        experience: state.experience.filter((exp: any) => exp.id !== action.payload)
      }
      case ActionType.UPDATE_USER_EDUCATION:
        return {
          ...state,
          education: state.education.map((exp: any) => {
            if (exp.id === action.payload.id) {
              exp = action.payload
            }
            return exp
          })
        };
      case ActionType.ADD_USER_EDUCATION:
        return {
          ...state,
          education: [...state.education, action.payload]
        }
      case ActionType.DELETE_USER_EDUCATION:
        return {
          ...state,
          education: state.education.filter((exp: any) => exp.id !== action.payload)
        }
      case ActionType.UPDATE_USER_LANGUAGES:
        return {
          ...state,
          languages: state.languages.map((exp: any) => {
            if (exp.id === action.payload.id) {
              exp = action.payload
            }
            return exp
          })
        };
      case ActionType.ADD_USER_LANGUAGES:
        return {
          ...state,
          languages: [...state.languages, action.payload]
        }
      case ActionType.DELETE_USER_LANGUAGES:
        return {
          ...state,
          languages: state.languages.filter((exp: any) => exp.id !== action.payload)
        }
      case ActionType.GET_NOTIFICATIONS:
        return {
          ...state,
          notifications: action.payload
        }
    default:
      return state;
  }
};

export default userReducer;
