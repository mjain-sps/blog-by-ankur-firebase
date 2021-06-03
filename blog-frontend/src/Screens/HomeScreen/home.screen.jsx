import React from "react";
import Layout from "../../Components/Layout/layout.components";
import { connect } from "react-redux";
//importing action functions
import { getBlogSnapShotAsync } from "../../Actions/blogs.actions";

//importing Loader
import LoaderComponent from "../../Components/Loader/loader.component";

//importing IMAGES
import section1Image from "../../Assets/Home-Page/MainPage/section-two.jpg";
import featuredImage1 from "../../Assets/Home-Page/MainPage/featured-image-1.jpg";
//importing styled components
import {
  HomeSection1Container,
  HomeSection2Container,
  Title,
  CardContainer,
  CardWithSingleImage,
  CardWithMultipleImage,
  ImageWrapper,
  BlogSynposisImageOverLay,
  BackDrop,
  HomeImageTag,
} from "./home.styles.js";
//Main component starts
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
          <HomeSection1Container>
            <img src={section1Image} alt="" />
          </HomeSection1Container>

          <HomeSection2Container>
            <Title>FEATURED</Title>
            <CardContainer>
              <CardWithSingleImage>
                <BackDrop />
                <BlogSynposisImageOverLay>
                  <span>Hi I am Madhur Jain</span>
                </BlogSynposisImageOverLay>
                <HomeImageTag src={featuredImage1} alt="" />
              </CardWithSingleImage>
              <CardWithMultipleImage>
                <ImageWrapper>
                  <BackDrop />
                  <BlogSynposisImageOverLay>
                    <span>Hi I am Madhur Jain</span>
                  </BlogSynposisImageOverLay>
                  <HomeImageTag src={featuredImage1} alt="" />
                </ImageWrapper>
                <ImageWrapper>
                  <BackDrop />
                  <BlogSynposisImageOverLay>
                    <span>Hi I am Madhur Jain</span>
                  </BlogSynposisImageOverLay>
                  <HomeImageTag src={featuredImage1} alt="" />
                </ImageWrapper>
                <ImageWrapper>
                  <BackDrop />
                  <BlogSynposisImageOverLay>
                    <span>Hi I am Madhur Jain</span>
                  </BlogSynposisImageOverLay>
                  <HomeImageTag src={featuredImage1} alt="" />
                </ImageWrapper>
                <ImageWrapper>
                  <BackDrop />
                  <BlogSynposisImageOverLay>
                    <span>Hi I am Madhur Jain</span>
                  </BlogSynposisImageOverLay>
                  <HomeImageTag src={featuredImage1} alt="" />
                </ImageWrapper>
              </CardWithMultipleImage>
            </CardContainer>
          </HomeSection2Container>
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
