import {
  GET_BLOG_SNAPSHOTS_LOADING,
  GET_BLOG_SNAPSHOTS_SUCCESS,
  GET_BLOG_SNAPSHOTS_ERROR,
} from "../Action-Types/blog.types";
const initialState = {
  loading: false,
  blogSnapshot: [],
  error: null,
};

export const blogSnapShotReducer = (state = initialState, action) => {
  console.log("from reducer", action);
  switch (action.type) {
    case GET_BLOG_SNAPSHOTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_BLOG_SNAPSHOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogSnapshot: [...state.blogSnapshot, action.payload],
      };
    case GET_BLOG_SNAPSHOTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
