import { getBlog, postBlog } from "../Action-Types/blog.types";
const initialState = {
  loading: false,
  blogSnapshot: [],
  error: null,
};

//Reducer to Get the Data from Blog
export const getBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case getBlog.GET_BLOG_SNAPSHOTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case getBlog.GET_BLOG_SNAPSHOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogSnapshot: [...state.blogSnapshot, action.payload],
      };
    case getBlog.GET_BLOG_SNAPSHOTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
