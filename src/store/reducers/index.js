import { combineReducers } from "redux";
import ActivityReducer from "store/reducers/activity";

const rootReducer = combineReducers({
  activity: ActivityReducer,
});

export default rootReducer;
