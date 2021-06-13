//importing combined reducer from redux
import { combineReducers } from "redux";

//importing various reducers related to blog posts
import {
  getBlogReducer,
  postBlogReducer,
  getSpecificBlogReducer,
} from "./blogs.reducer";

//importing various reducers related to authentication
import { signUpReducer } from "./auth.reducers";

//importing reducers which add the checked categories to be displayed on side nav bar or sub header
import {
  SubHeaderAddReducer,
  subHeaderCheckedReducer,
} from "./subheader.reducer";

//importing reducers which add the checked categories to be displayed on home screen
import {
  categoryAddHomeScreenReducer,
  categoryViewHomeScreenReducer,
} from "./homescreen.category.reducer";

//Our combined Reducer
const rootReducer = combineReducers({
  blogSnapshot: getBlogReducer,
  user: signUpReducer,
  subHeaderAdded: SubHeaderAddReducer,
  subHeaderChecked: subHeaderCheckedReducer,
  newBlog: postBlogReducer,
  specificPost: getSpecificBlogReducer,
  homeScreenCategoryAdded: categoryAddHomeScreenReducer,
  homeScreenCategoriesChecked: categoryViewHomeScreenReducer,
});

export default rootReducer;
