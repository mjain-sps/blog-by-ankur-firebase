import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Components/Layout/layout.components";

//importing action functions
import { getBlogsAction } from "../../Actions/blogs.actions";

//importing Loader & Notifications Component
import LoaderComponent from "../../Components/Loader/loader.component";
import Messages from "../../Components/Notifications/messages.component";

//importing IMAGES
import section1Image from "../../Assets/Home-Page/MainPage/section-two.jpg";
import featuredImage1 from "../../Assets/Home-Page/MainPage/featured-image-1.jpg";
import authorDisplayPic from "../../Assets/Home-Page/MainPage/author-profile-pic.jpeg";
//importing Fontawsome fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
//importing styled components
import {
  HomeSection1Container,
  HomeSectionContainer,
  Title,
  CardContainer,
  CardWithSingleImage,
  CardWithMultipleImage,
  ImageWrapper,
  BlogSynposisImageOverLay,
  BackDrop,
  HomeImageTag,
  // Section 3 Imports
  LatestBlogCardContainer,
  LatestBlogImageWrapper,
  LatestBlogCardImage,
  LatestBlogContentWrapper,
  LatestBlogContentTitle,
  LatestBlogContentAuthor,
  DisplayPicAuthor,
  AuthorCredentials,
  Comments,
  LatestBlogContentSynopsis,
  LatestBlogReadMoreButton,
} from "./home.styles.js";
//Main component starts
const HomeScreen = () => {
  //define react-reduc constants
  const dispatch = useDispatch();
  const blogFromState = useSelector((state) => state.blogSnapshot);
  const { loading, error, blogSnapshot: blogs } = blogFromState;

  //Lets dispatch the action to fetch the posts
  useEffect(() => {
    dispatch(getBlogsAction());
  }, [dispatch]);
  return loading ? (
    <LoaderComponent />
  ) : (
    blogs && (
      <Layout>
        {error && <Messages>{error}</Messages>}
        <HomeSection1Container>
          <img src={section1Image} alt="" />
        </HomeSection1Container>

        {/* Section 2 of the Home page which shows the Featured Blogs */}
        <HomeSectionContainer>
          <Title>
            <span>FEATURED</span>
          </Title>
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
        </HomeSectionContainer>

        {/* Section 3 of the Home Page which shows Latest Blogs */}

        <HomeSectionContainer>
          <Title>
            <span>LATEST</span>
          </Title>
          <LatestBlogCardContainer>
            <LatestBlogImageWrapper>
              <LatestBlogCardImage src={featuredImage1} alt="" />
            </LatestBlogImageWrapper>

            <LatestBlogContentWrapper>
              <LatestBlogContentTitle>
                <span>What to Wear on First Date? We asked the Exerts...</span>
              </LatestBlogContentTitle>

              <LatestBlogContentAuthor>
                <DisplayPicAuthor src={authorDisplayPic} alt="" />
                <AuthorCredentials>
                  <span>Ankur Jain</span>
                  <span>June 3 2021</span>
                </AuthorCredentials>
                <Comments>
                  <span className="commentValue">1</span>
                  <span>
                    <FontAwesomeIcon icon={faCommentAlt} />
                  </span>
                </Comments>
              </LatestBlogContentAuthor>

              <LatestBlogContentSynopsis>
                Find people with high expectations and a low tolerance for
                excuses. They'll have higher expectations for you than you have
                for yourself. Don't flatter yourself that this has much to do
                with you - this is just who they are. Don't look for "nice" in
                these relationships....
              </LatestBlogContentSynopsis>

              <LatestBlogReadMoreButton>READ MORE</LatestBlogReadMoreButton>
            </LatestBlogContentWrapper>
          </LatestBlogCardContainer>
        </HomeSectionContainer>
      </Layout>
    )
  );
};

export default HomeScreen;
