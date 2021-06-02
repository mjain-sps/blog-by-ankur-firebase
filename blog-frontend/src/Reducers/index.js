import { combineReducers } from "redux";
import { getBlogReducer } from "./blogs.reducer";

const rootReducer = combineReducers({
  blogSnapshot: getBlogReducer,
});

export default rootReducer;
