import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

const rootReducers = combineReducers({
    posts: postsReducer
});

export default rootReducers;