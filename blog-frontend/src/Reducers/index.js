import { combineReducers } from "redux";
import { getBlogReducer, postBlogReducer } from "./blogs.reducer";
import { signUpReducer } from "./auth.reducers";
import { SubHeaderReducer } from "./subheader.reducer";
const rootReducer = combineReducers({
  blogSnapshot: getBlogReducer,
  user: signUpReducer,
  subHeader: SubHeaderReducer,
  newBlog: postBlogReducer,
});

export default rootReducer;
