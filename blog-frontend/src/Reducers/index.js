import { combineReducers } from "redux";
import {
  getBlogReducer,
  postBlogReducer,
  getSpecificBlogReducer,
} from "./blogs.reducer";
import { signUpReducer } from "./auth.reducers";
import {
  SubHeaderAddReducer,
  subHeaderCheckedReducer,
} from "./subheader.reducer";
const rootReducer = combineReducers({
  blogSnapshot: getBlogReducer,
  user: signUpReducer,
  subHeaderAdded: SubHeaderAddReducer,
  subHeaderChecked: subHeaderCheckedReducer,
  newBlog: postBlogReducer,
  specificPost: getSpecificBlogReducer,
});

export default rootReducer;
