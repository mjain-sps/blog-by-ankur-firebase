import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlogsAction } from "../../../Actions/blogs.actions";
import {
  AllPostsContainer,
  AllPostsSearchContainer,
  AllPostsSearchBar,
  AllPostsCard,
  Section,
  BlogSynopsis,
  VerticalDivider,
  BlogContent,
} from "./admin.allposts.styles";
import LoaderComponent from "../../../Components/Loader/loader.component";
import Messages from "../../../Components/Notifications/messages.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//Main Component renders here
const AdminViewAllPosts = () => {
  const dispatch = useDispatch();
  const blogFromState = useSelector((state) => state.blogSnapshot);
  const { loading, error, blogSnapshot } = blogFromState;

  useEffect(() => {
    if (!blogSnapshot.length) {
      dispatch(getBlogsAction());
    }
  }, [dispatch, blogSnapshot]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <AllPostsContainer>
      {error && <Messages>{error}</Messages>}
      {/* This is a search Container to do Search related to Posts based on Title / Author / Synopsis */}
      <AllPostsSearchContainer>
        <span>{<FontAwesomeIcon icon={faSearch} />}</span>
        <AllPostsSearchBar placeholder="Search Blog by title / Author / Synopsis" />
      </AllPostsSearchContainer>
      {/* Now this section will map through the Blogs and give a card with litte info */}
      {blogSnapshot.length &&
        blogSnapshot.map((blog) => {
          return (
            <AllPostsCard key={blog.id}>
              <h5>{blog.title}</h5>
              <p>Category:{blog.category}</p>
              <Section>
                <span>Written By: {blog.author}</span>
                <span>May 20 2021</span>
              </Section>
              <Section>
                <div>
                  <span>Blog Pic:</span>
                  <img src={blog.uploadedImageURL} alt="" />
                </div>
                <VerticalDivider />
                <div>
                  <span>Published :{blog.published ? "YES" : "NO"}</span>
                </div>
              </Section>
              <BlogSynopsis>{blog.blogSynopsis}</BlogSynopsis>
              <BlogContent>{blog.blogContent}</BlogContent>
              <Link to={`/admin-blog-detail/${blog.id}`}>View</Link>
            </AllPostsCard>
          );
        })}
    </AllPostsContainer>
  );
};

export default AdminViewAllPosts;
