import { combineReducers } from "redux";
import { blogSnapShotReducer } from "./blogs.reducer";

const rootReducer = combineReducers({
  blogSnapshot: blogSnapShotReducer,
});

export default rootReducer;
