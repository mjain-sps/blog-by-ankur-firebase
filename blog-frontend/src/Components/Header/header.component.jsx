import React, { useState, useEffect } from "react";
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//importing ACTIONS
import { logoutAction } from "../../Actions/auth.actions.js";
import { subHeaderGetAction } from "../../Actions/subheader.actions.js";
//Importing Loader and Messages components
import LoaderComponent from "../Loader/loader.component.jsx";
import Messages from "../Notifications/messages.component.jsx";

//Main Component Starts
const Header = (props) => {
  const [toggleSubHeader, setToggleSubHeader] = useState(false);
  const [viewSubNavBar, setViewSubNavBar] = useState(false);
  const [currentNav, setCurrentNav] = useState("HOME");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subHeaderGetAction());
  }, [dispatch]);
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

  const subHeaderCheckedFromState = useSelector(
    (state) => state.subHeaderChecked
  );
  const {
    loading: subHeaderLoading,
    subHeader,
    error: errorSubHeader,
  } = subHeaderCheckedFromState;

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

            {loadingBlog && subHeaderLoading ? (
              <LoaderComponent />
            ) : postError && errorSubHeader ? (
              <Messages>{postError || errorSubHeader}</Messages>
            ) : (
              subHeader &&
              subHeader.length &&
              subHeader.map((checkedSubHeader) => {
                return (
                  <NavItem
                    key={checkedSubHeader.id}
                    to={`/${checkedSubHeader.category}`}
                    name={`${checkedSubHeader.category.toUpperCase()}`}
                    currentpath={
                      props.location.pathname ===
                      `/${checkedSubHeader.category}`
                        ? "CURRENT"
                        : null
                    }
                    onMouseEnter={() => {
                      handleSubNavBarToggleON();
                      setCurrentSubNav(checkedSubHeader.category.toUpperCase());
                    }}
                    onMouseLeave={handleSubNavBarToggleOFF}
                  >
                    {checkedSubHeader.category.toUpperCase()}
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
            {
              <LifeStyleSubHeader
                currentNav={currentNav}
                relevantBlogPosts={blogPosts.filter(
                  (ele) => ele.category.toUpperCase() === currentNav
                )}
              />
            }
          </SubHeaderContainer>
        )}
      </HeaderContainer>
    </>
  );
};

export default withRouter(Header);
