import React from "react";
import { connect } from "react-redux";
import { getBlogSnapShotAsync } from "../../../Actions/blogs.actions";
import {
  AllPostsContainer,
  AllPostsSearchContainer,
  AllPostsSearchBar,
  AllPostsCard,
  Section,
} from "./admin.allposts.styles";
import LoaderComponent from "../../../Components/Loader/loader.component";
import Messages from "../../../Components/Notifications/messages.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
class AdminViewAllPosts extends React.Component {
  componentDidMount() {
    this.props.getBlogSnapShotAsync();
  }
  render() {
    const { error, loading, blogSnapshot: blogs } = this.props.blogs;
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
        {blogs.length &&
          blogs.map((blog) => {
            return (
              <AllPostsCard key={blog.id}>
                <h5>{blog.title}</h5>
                <p>Category:{blog.category}</p>
                <Section>
                  <span>Written By: {blog.author}</span>
                  <span>May 20 2021</span>
                </Section>
                <Section>
                  <img src={blog.uploadedImageURL} alt="" />
                  <span>Published :{blog.published ? "YES" : "NO"}</span>
                </Section>
                <Section>{blog.blogSynopsis}</Section>
              </AllPostsCard>
            );
          })}
      </AllPostsContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  blogs: state.blogSnapshot,
});
const mapDispatchToProps = (dispatch) => ({
  getBlogSnapShotAsync: () => dispatch(getBlogSnapShotAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminViewAllPosts);
