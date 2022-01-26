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
  experience: [
    {
      company: "solid Dynamic",
      position: "Developer",
      startDate: "2021-12-08T19:41:20.625Z",
      endDate: "2022-01-24T17:18:28.111Z",
      description:
        "Temporibus dolore et. Ratione sit praesentium impedit vero ut sequi. Dolorem qui dolores voluptatem delectus est ut maiores incidunt amet. Rerum ut labore qui omnis. Voluptatem ratione harum quia. Dolor voluptatem cum assumenda omnis repellat laborum voluptatem fugit.",
    },
    {
      company: "Sleek haptic",
      endDate: "2022-01-24T01:35:17.418Z",
      position: "Ameliorated",
      startDate: "2021-09-28T15:39:27.402Z",
      description:
        "Cumque repellendus odio et nemo. Velit consequuntur non fugit aut ea. Est fugit et quia labore quaerat ratione ipsum aut. Animi dolor officia sunt asperiores perferendis quis esse est.",
    },
  ],
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
      console.log(action.payload.data);
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
    case ActionType.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case ActionType.SET_USER:
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
