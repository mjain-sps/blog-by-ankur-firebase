import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificBlogACtion } from "../../../Actions/blogs.actions";

import LoaderComponent from "../../../Components/Loader/loader.component";
import Messages from "../../../Components/Notifications/messages.component";

import {
  BlogDetailContainer,
  BlogDetailLeftSection,
  BlogDetailRightSection,
  DateCommentsSection,
  BlogTitle,
  AuthorDetails,
  BlogSynopsis,
  BlogCategory,
  BlogMainContent,
  BlogRelevantDetailsSection,
} from "./posts.details.styles";

//For testing purpose only importing the DP of the author from HDD. Ideally it has to be uplaoded to the server while creating the post.
import authorProfilePic from "../../../Assets/Home-Page/MainPage/author-profile-pic.jpeg";
const PostDetailsPage = (props) => {
  const dispatch = useDispatch();
  const specificPostFromState = useSelector((state) => state.specificPost);
  const { loading, error, specificPost } = specificPostFromState;
  useEffect(() => {
    dispatch(getSpecificBlogACtion(props.match.params.id));
  }, [dispatch, props.match.params]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <>
      {error && <Messages>{error}</Messages>}
      {specificPost && (
        <>
          <BlogDetailContainer>
            <BlogRelevantDetailsSection>
              <BlogDetailLeftSection>
                <img src={specificPost.uploadedImageURL} alt="" />
              </BlogDetailLeftSection>

              <BlogDetailRightSection>
                <DateCommentsSection>
                  <span>7th June 2021</span>
                  <span>Admin</span>
                  <span>Comments: 151</span>
                </DateCommentsSection>

                <BlogTitle>
                  <h1>{specificPost.title}</h1>
                </BlogTitle>

                <AuthorDetails>
                  <img src={authorProfilePic} alt="" />
                  <div>
                    <p>{specificPost.author}</p>
                    <p>CEO Blogs By Ankur</p>
                  </div>
                </AuthorDetails>

                <BlogSynopsis>
                  <p>{specificPost.blogSynopsis}</p>
                </BlogSynopsis>

                <BlogCategory>
                  <p>Blog written under {specificPost.category} category</p>
                  {specificPost.subCategory && (
                    <p>Sub category {specificPost.subCategory}</p>
                  )}
                </BlogCategory>
              </BlogDetailRightSection>
            </BlogRelevantDetailsSection>

            <BlogMainContent>{specificPost.blogContent}</BlogMainContent>
          </BlogDetailContainer>
        </>
      )}
    </>
  );
};

export default PostDetailsPage;
