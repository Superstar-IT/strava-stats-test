import { combineReducers } from "redux";
import PostReducer from "store/reducers/post";

const rootReducer = combineReducers({
  post: PostReducer,
});

export default rootReducer;
