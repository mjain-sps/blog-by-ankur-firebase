import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Components/Layout/layout.components";

//importing action functions
import { getBlogsAction } from "../../Actions/blogs.actions";
import { viewCategoriesHomeScreenAction } from "../../Actions/category.homescreen.actions";
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
  CategoryTitle,
  BorderBottomDiv,
} from "./home.styles.js";

//Main component starts
const HomeScreen = () => {
  //define react-reduc constants
  const dispatch = useDispatch();
  const blogFromState = useSelector((state) => state.blogSnapshot);
  const categoriesToBeDisplayedOnHomeScreenFromState = useSelector(
    (state) => state.homeScreenCategoriesChecked
  );
  const { loading, error, blogSnapshot: blogs } = blogFromState;
  const { loadingView, checkedCategoriesForHomeScreen, errorViewCategories } =
    categoriesToBeDisplayedOnHomeScreenFromState;

  //Lets dispatch the action to fetch the posts
  //We will also fetch the checked categories which have been marked to be displayed on home screen by the admin
  useEffect(() => {
    dispatch(getBlogsAction());
    dispatch(viewCategoriesHomeScreenAction());
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
          <CategoryTitle>
            <h1>FEATURED</h1>
          </CategoryTitle>
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

        {/* Section 3 of the Home Page which shows Blogs based on Categories as Marked as Checked by the Admin */}
        {/* In case admin has marked no entry then we will display any 5 categories. This functionality to be added later */}
        {/* Also I have to add functional to set loading and error handling of checkedCategoriesHomeScreen */}
        {checkedCategoriesForHomeScreen.length &&
          checkedCategoriesForHomeScreen.map((ele) => {
            return (
              <>
                <CategoryTitle>
                  <h1>{ele.category.toUpperCase()}</h1>
                </CategoryTitle>
                <div>
                  {blogs
                    .filter((e) => e.category === ele.category)
                    .map((blog) => {
                      return (
                        <HomeSectionContainer>
                          <Title>
                            <span>{blog.title.toUpperCase()}</span>
                          </Title>
                          <LatestBlogCardContainer>
                            <LatestBlogImageWrapper>
                              <LatestBlogCardImage
                                src={blog.uploadedImageURL}
                                alt=""
                              />
                            </LatestBlogImageWrapper>

                            <LatestBlogContentWrapper>
                              <LatestBlogContentTitle>
                                <span>{blog.blogSynopsis}</span>
                              </LatestBlogContentTitle>

                              <LatestBlogContentAuthor>
                                <DisplayPicAuthor
                                  src={authorDisplayPic}
                                  alt=""
                                />
                                <AuthorCredentials>
                                  <span>{blog.author}</span>
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
                                {blog.blogContent}
                              </LatestBlogContentSynopsis>

                              <LatestBlogReadMoreButton>
                                READ MORE
                              </LatestBlogReadMoreButton>
                            </LatestBlogContentWrapper>
                          </LatestBlogCardContainer>
                        </HomeSectionContainer>
                      );
                    })}
                </div>
                <BorderBottomDiv></BorderBottomDiv>
              </>
            );
          })}
      </Layout>
    )
  );
};

export default HomeScreen;
