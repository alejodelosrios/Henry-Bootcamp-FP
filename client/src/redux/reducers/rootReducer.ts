import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";
import companyReducer from "./companyReducer";
import modalReducer from "./modalReducer";

const rootReducers = combineReducers({
  postsReducer,
  userReducer,
  companyReducer,
  modalReducer,
});

export default rootReducers;
