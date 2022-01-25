import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  postsReducer,
  userReducer,
});

export default rootReducers;
