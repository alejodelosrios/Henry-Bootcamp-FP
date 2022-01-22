import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

const rootReducers = combineReducers({
  postsReducer,
});

export default rootReducers;
