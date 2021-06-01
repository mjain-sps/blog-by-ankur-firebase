import { blogsSnapshot } from "../Action-Types/blog.types";

export const getBlogSnapshot = (blogSnapShotData) => {
  return {
    type: blogsSnapshot.GET_BLOG_SNAPSHOTS_SUCCESS,
    payload: blogSnapShotData,
  };
};
