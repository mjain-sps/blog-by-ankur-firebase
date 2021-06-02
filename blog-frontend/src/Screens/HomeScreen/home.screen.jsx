import React from "react";
import Layout from "../../Components/Layout/layout.components";
import { connect } from "react-redux";
//importing action functions
import { getBlogSnapShotAsync } from "../../Actions/blogs.actions";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }
  componentDidMount() {
    const { madhur } = this.props;
    madhur();
  }
  render() {
    console.log(this.props.blogSnapshot);
    return (
      <Layout>
        <div>Hi I am the home screen</div>
        <h1>hello everyone</h1>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    blogSnapshot: state.blogSnapshot,
  };
};
const mapDispatchToProps = (dispatch) => ({
  madhur: () => dispatch(getBlogSnapShotAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
