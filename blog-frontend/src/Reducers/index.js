import { combineReducers } from "redux";
import { getBlogReducer } from "./blogs.reducer";
import { signUpReducer } from "./auth.reducers";
const rootReducer = combineReducers({
  blogSnapshot: getBlogReducer,
  user: signUpReducer,
});

export default rootReducer;
