import { getBlogTypes, postBlogTypes } from "../Action-Types/blog.types";
const initialState = {
  loading: false,
  blogSnapshot: [],
  error: null,
};

const initialStatePostBlog = {
  loading: false,
  addedBlog: null,
  error: null,
};
//Reducer to Get the Data from Blog
export const getBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case getBlogTypes.GET_BLOG_SNAPSHOTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case getBlogTypes.GET_BLOG_SNAPSHOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogSnapshot: action.payload,
      };
    case getBlogTypes.GET_BLOG_SNAPSHOTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//Reducer to add the Post Blog

export const postBlogReducer = (state = initialStatePostBlog, action) => {
  switch (action.type) {
    case postBlogReducer.POST_BLOG_SNAPSHOT_RESET:
      return {
        ...state,
        loading: false,
        addedBlog: null,
        error: null,
      };
    case postBlogTypes.POST_BLOG_SNAPSHOTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case postBlogTypes.POST_BLOG_SNAPSHOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        addedBlog: action.payload,
      };
    case postBlogTypes.POST_BLOG_SNAPSHOTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
