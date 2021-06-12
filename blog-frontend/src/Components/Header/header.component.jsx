import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//importing the styled compoments
import {
  HeaderContainer,
  SocialMediaDiv,
  Logo,
  Navbar,
  FontIcon,
  LogoSection,
  NavItemsContainer,
  NavItem,
  SearchBar,
  SubHeaderContainer,
  SocialMediaDivRightSideContainer,
} from "./header.styles.js";
//importing font awsome icons - BRAND
import {
  faFacebookSquare,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
//importing font awsome icons - SOLID
import {
  faSearch,
  faSignInAlt,
  faSignOutAlt,
  faCrown,
  faCrow,
} from "@fortawesome/free-solid-svg-icons";
//importing Logo
import logo from "../../Assets/Home-Page/Logo.jpeg";
//importing the SubHeader Components
import LifeStyleSubHeader from "../SubHeaders/Lifestyle-SubHeader/lifestyle.subheader.component";
import OutfitsStyleSubHeader from "../SubHeaders/Outfits-SubHeader/outfits.subheader.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//importing ACTIONS
import { logoutAction } from "../../Actions/auth.actions.js";
import LoaderComponent from "../Loader/loader.component.jsx";
import Messages from "../Notifications/messages.component.jsx";
//Main Component Starts
const Header = (props) => {
  const [toggleSubHeader, setToggleSubHeader] = useState(false);
  const [viewSubNavBar, setViewSubNavBar] = useState(false);
  const [currentNav, setCurrentNav] = useState("HOME");

  const dispatch = useDispatch();

  // We will fetch user and the blogs from the state
  const currentUserFromState = useSelector((state) => state.user);
  const {
    loading: loadingUser,
    user: currentUser,
    error: errorUser,
  } = currentUserFromState;

  const blogsFromState = useSelector((state) => state.blogSnapshot);
  const {
    loading: loadingBlog,
    blogSnapshot: blogPosts,
    error: postError,
  } = blogsFromState;

  const handleSubNavBarToggleON = () => {
    setToggleSubHeader(true);
  };

  const handleSubNavBarToggleOFF = () => {
    setToggleSubHeader(false);
  };

  const setCurrentSubNav = (subHeaderName) => {
    setCurrentNav(subHeaderName);
  };

  const handleSignOut = () => {
    //Dispatching Action
    dispatch(logoutAction());
  };

  const currentDate = new Date();
  return (
    <>
      <HeaderContainer>
        <SocialMediaDiv>
          <div>{currentDate.toDateString()}</div>
          <SocialMediaDivRightSideContainer>
            <div>
              <span>
                <FontIcon icon={faFacebookSquare} />
              </span>
              <span>
                <FontIcon icon={faLinkedin} />
              </span>
              <span>
                <FontIcon icon={faYoutube} />
              </span>
            </div>
            <div>
              {/* We have to add loading and error user handlers here */}

              {currentUser &&
                currentUser.uid === "MWzRulcpeQd7buPIaPyfiLZrYmG3" && (
                  <Link to="/admin-home">
                    {<FontAwesomeIcon icon={faCrown} />}
                  </Link>
                )}
            </div>
            <div>
              {!currentUser ? (
                <Link to="/signin">
                  <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
              ) : (
                <Link to="/" onClick={handleSignOut}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </Link>
              )}
            </div>
          </SocialMediaDivRightSideContainer>
        </SocialMediaDiv>
        <LogoSection>
          <Logo src={logo} />
        </LogoSection>
        <Navbar>
          <NavItemsContainer>
            <NavItem
              to="/"
              name="home"
              currentpath={props.location.pathname === "/" ? "CURRENT" : null}
            >
              HOME
            </NavItem>

            {/* Here we will fetch the categories from state which have been marked as subheader -Checked categories */}
            {/* First get all categories from posts and then filter only those which have checked against them */}

            {loadingBlog ? (
              <LoaderComponent />
            ) : postError ? (
              <Messages>{postError}</Messages>
            ) : (
              blogPosts &&
              blogPosts.length &&
              blogPosts.map((post) => {
                return (
                  <NavItem
                    to={`/${post.category}`}
                    name={`${post.category.toUpperCase()}`}
                    currentPath={
                      props.location.pathname === `/${post.category}`
                        ? "CURRENT"
                        : null
                    }
                    onMouseEnter={() => {
                      handleSubNavBarToggleON();
                      setCurrentSubNav(post.category.toUpperCase());
                    }}
                    onMouseLeave={handleSubNavBarToggleOFF}
                  >
                    {post.category.toUpperCase()}
                  </NavItem>
                );
              })
            )}
          </NavItemsContainer>

          <SearchBar>
            <FontIcon icon={faSearch} />
          </SearchBar>
        </Navbar>

        {toggleSubHeader && (
          <SubHeaderContainer
            onMouseEnter={handleSubNavBarToggleON}
            onMouseLeave={handleSubNavBarToggleOFF}
          >
            {currentNav === "LIFESTYLE" && <LifeStyleSubHeader />}
            {currentNav === "OUTFITS" && <OutfitsStyleSubHeader />}
          </SubHeaderContainer>
        )}
      </HeaderContainer>
    </>
  );
};

export default withRouter(Header);
