import { blogsSnapshot } from "../Action-Types/blog.types";
const initialState = {
  blogSnapshot: [],
};

export const blogSnapShotReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BLOG_SNAPSHOTS_SUCCESS":
      return {
        ...state,
        blogsSnapshot: action.payload,
      };
    default:
      return state;
  }
};
