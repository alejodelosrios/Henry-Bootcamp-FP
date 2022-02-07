import { Action } from "../actions";
import { ActionType } from "../actions/actionTypes";
import { sortByProp } from "../../services/sort";

const initialState = {
  id: null,
  role: "",
  token: "",
  email: "",
  password: "",
  admin: {
    categories: [],
    users: [],
    news: [],
  },
  company: {
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
  applicant: {
    id: null,
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
    favorites: [],
    notifications: [],
    postulations: [],
  },
  userCreateModal: { val: false, msg: "" },
};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_USER:
      if (!action.payload.modal) {
        return {
          ...state,
          id: action.payload.data.id,
          role: action.payload.data.role,
          token: action.payload.data.token,
          email: action.payload.data.email,
          applicant: {
            ...state.applicant,
            ...action.payload.data.applicant,
          },
          company: {
            ...state.company,
            ...action.payload.data.company,
          },
        };
      }
      return {
        ...state,
        id: action.payload.data.id,
        role: action.payload.data.role,
        token: action.payload.data.token,
        email: action.payload.data.email,
        applicant: {
          ...state.applicant,
          ...action.payload.data.applicant,
        },
        company: {
          ...state.company,
          ...action.payload.data.company,
        },
        userCreateModal: action.payload.modal,
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
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
        role: action.payload.role,
        email: action.payload.email,
        applicant: {
          ...state.applicant,
          ...action.payload.applicant,
        },
        company: {
          ...state.company,
          ...action.payload.company,
        },
      };
    case ActionType.UPDATE_USER:
      return {
        ...state,
        applicant: {
          ...state.applicant,
          ...action.payload,
        },
      };
    case ActionType.UPDATE_MAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ActionType.UPDATE_USER_EXP:
      return {
        ...state,
        applicant: {
          ...state.applicant,
          experience: state.applicant.experience.map((exp: any) => {
            if (exp.id === action.payload.id) {
              exp = action.payload;
            }
            return exp;
          }),
        },
      };
    case ActionType.ADD_USER_EXP:
      return {
        ...state,
        applicant: {
          ...state.applicant,
          experience: [...state.applicant.experience, action.payload],
        },
      };
    case ActionType.DELETE_USER_EXP:
      return {
        ...state,
        applicant: {
          ...state.applicant,
          experience: state.applicant.experience.filter(
            (exp: any) => exp.id !== action.payload
          ),
        },
      };
    case ActionType.UPDATE_USER_EDUCATION:
      return {
        ...state,
        applicant: {
          ...state.applicant,
          education: state.applicant.education.map((exp: any) => {
            if (exp.id === action.payload.id) {
              exp = action.payload;
            }
            return exp;
          }),
        },
      };
    case ActionType.ADD_USER_EDUCATION:
      return {
        ...state,
        applicant: {
          ...state.applicant,
          education: [...state.applicant.education, action.payload],
        },
      };
    case ActionType.DELETE_USER_EDUCATION:
      return {
        ...state,
        applicant: {
          ...state.applicant,
          education: state.applicant.education.filter(
            (exp: any) => exp.id !== action.payload
          ),
        },
      };
    case ActionType.UPDATE_USER_LANGUAGES:
      return {
        ...state,

        applicant: {
          ...state.applicant,
          languages: state.applicant.languages.map((exp: any) => {
            if (exp.id === action.payload.id) {
              exp = action.payload;
            }
            return exp;
          }),
        },
      };
    case ActionType.ADD_USER_LANGUAGES:
      return {
        ...state,

        applicant: {
          ...state.applicant,
          languages: [...state.applicant.languages, action.payload],
        },
      };
    case ActionType.DELETE_USER_LANGUAGES:
      return {
        ...state,

        applicant: {
          ...state.applicant,
          languages: state.applicant.languages.filter(
            (exp: any) => exp.id !== action.payload
          ),
        },
      };
    case ActionType.GET_NOTIFICATIONS:
      if (action.payload.role === "applicant") {
        return {
          ...state,
          applicant: {
            ...state.applicant,
            notifications: action.payload.notifications,
          },
        };
      } else if (action.payload.role === "company") {
        return {
          ...state,
          company: {
            ...state.company,
            notifications: action.payload.notifications,
          },
        };
      } else {
        return state;
      }
    case ActionType.GET_FAVORITES:
      return {
        ...state,
        applicant: { ...state.applicant, favourites: action.payload },
      };

    case ActionType.SET_FAVORITES:
      return {
        ...state,
        applicant: {
          ...state.applicant,
          favorites: action.payload,
        },
      };

    case ActionType.JOB_APPLICATION:
      return {
        ...state,
        applicant: {
          ...state.applicant,
          postulations: action.payload,
        },
      };
    case ActionType.EDIT_POST:
      return {
        ...state,
        company: {
          ...state.company,
          postulations: action.payload,
        },
      };
    case ActionType.SUBMIT_TAGS:
      console.log("en el reducer ", action.payload);
      return {
        ...state,

        applicant: {
          ...state.applicant,
          skillTags: action.payload,
        },
      };
    case ActionType.UPDATE_PREMIUM:
      console.log("Recibido en reducer, userReducer:", action.payload);
      return {
        ...state,
        company: {
          ...state.company,
          premium: action.payload,
        },
      };
    case ActionType.GET_CATEGORIES:
      return {
        ...state,
        admin: {
          ...state.admin,
          categories: sortByProp(action.payload, "id"),
        },
      };
    case ActionType.CREATE_CATEGORY:
      return {
        ...state,
        admin: {
          ...state.admin,
          categories: sortByProp(
            [...state.admin.categories, action.payload],
            "id"
          ),
        },
      };
    case ActionType.GET_USERS:
      return {
        ...state,
        admin: {
          ...state.admin,
          users: sortByProp(action.payload, "id").filter(
            (e: any) => e.email.search("deleted") < 0
          ),
        },
      };
    case ActionType.DELETE_USER:
      return {
        ...state,
        admin: {
          ...state.admin,
          users: sortByProp(
            state.admin.users.filter((e: any) => e.id !== action.payload),
            "id"
          ),
        },
      };
    case ActionType.GET_NEWS:
      return {
        ...state,
        admin: {
          ...state.admin,
          news: sortByProp(action.payload, "id"),
        },
      };
    case ActionType.CREATE_NEW:
      return {
        ...state,
        admin: {
          ...state.admin,
          news: sortByProp([...state.admin.news, action.payload], "id"),
        },
      };
    default:
      return state;
  }
};

export default userReducer;
