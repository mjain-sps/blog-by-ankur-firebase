import React from "react";
import Layout from "../../Components/Layout/layout.components";
import { connect } from "react-redux";
//importing action functions
import { getBlogSnapShotAsync } from "../../Actions/blogs.actions";

//importing Loader
import LoaderComponent from "../../Components/Loader/loader.component";
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }
  componentDidMount() {
    const { getBlogSnapShotAsync } = this.props;
    getBlogSnapShotAsync();
  }
  render() {
    const { loading, blogSnapshot: blogs, error } = this.props.blogSnapshot;
    return loading ? (
      <LoaderComponent />
    ) : (
      blogs && (
        <Layout>
          <h1>I am the home page</h1>
        </Layout>
      )
    );
  }
}
const mapStateToProps = (state) => {
  return {
    blogSnapshot: state.blogSnapshot,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getBlogSnapShotAsync: () => dispatch(getBlogSnapShotAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
