import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";
import companyReducer from './companyReducer';

const rootReducers = combineReducers({
  postsReducer,
  userReducer,
  companyReducer,
});

export default rootReducers;
