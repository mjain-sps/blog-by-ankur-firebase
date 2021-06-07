import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSpecificBlogACtion } from "../../../Actions/blogs.actions";
const PostDetailsPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSpecificBlogACtion(props.match.params.id));
  }, [dispatch, props.match.params]);
  return <h1>I am the details page</h1>;
};

export default PostDetailsPage;
