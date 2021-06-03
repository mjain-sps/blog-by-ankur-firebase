import React from "react";
import { withRouter, Link } from "react-router-dom";
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

import {
  faFacebookSquare,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
//importing Logo
import logo from "../../Assets/Home-Page/Logo.jpeg";
//importing the SubHeader Components
import LifeStyleSubHeader from "../SubHeaders/Lifestyle-SubHeader/lifestyle.subheader.component";
import OutfitsStyleSubHeader from "../SubHeaders/Outfits-SubHeader/outfits.subheader.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Main Component Starts
class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      toggleSubHeader: false,
      viewSubNavBar: false,
      currentNav: "HOME",
    };
  }

  handleSubNavBarToggleON = () => {
    this.setState({ toggleSubHeader: true });
  };

  handleSubNavBarToggleOFF = () => {
    this.setState({ toggleSubHeader: false });
  };

  setCurrentSubNav = (subHeaderName) => {
    this.setState({ currentNav: subHeaderName });
  };
  render() {
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
                <Link to="/signin">
                  <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
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
                currentpath={
                  this.props.location.pathname === "/" ? "CURRENT" : null
                }
              >
                HOME
              </NavItem>

              <NavItem
                to="/lifestyle"
                name="LIFESTYLE"
                currentpath={
                  this.props.location.pathname === "/lifestyle"
                    ? "CURRENT"
                    : null
                }
                onMouseEnter={() => {
                  this.handleSubNavBarToggleON();
                  this.setCurrentSubNav("LIFESTYLE");
                }}
                onMouseLeave={this.handleSubNavBarToggleOFF}
              >
                LIFESTYLE
              </NavItem>

              <NavItem
                to="/outfits"
                name="OUTFITS"
                currentpath={
                  this.props.location.pathname === "/outfits" ? "CURRENT" : null
                }
                onMouseEnter={() => {
                  this.handleSubNavBarToggleON();
                  this.setCurrentSubNav("OUTFITS");
                }}
                onMouseLeave={this.handleSubNavBarToggleOFF}
              >
                OUTFITS
              </NavItem>

              <NavItem
                to="/haircare"
                name="HAIRCARE"
                currentpath={
                  this.props.location.pathname === "/haircare"
                    ? "CURRENT"
                    : null
                }
                onMouseEnter={() => {
                  this.handleSubNavBarToggleON();
                  this.setCurrentSubNav("HAIRCARE");
                }}
                onMouseLeave={this.handleSubNavBarToggleOFF}
              >
                HAIRCARE
              </NavItem>

              <NavItem
                to="/makeup"
                name="MAKEUP"
                currentpath={
                  this.props.location.pathname === "/makeup" ? "CURRENT" : null
                }
                onMouseEnter={() => {
                  this.handleSubNavBarToggleON();
                  this.setCurrentSubNav("MAKEUP");
                }}
                onMouseLeave={this.handleSubNavBarToggleOFF}
              >
                MAKEUP
              </NavItem>

              <NavItem
                to="/beauty"
                name="BEAUTY"
                currentpath={
                  this.props.location.pathname === "/beauty" ? "CURRENT" : null
                }
                onMouseEnter={() => {
                  this.handleSubNavBarToggleON();
                  this.setCurrentSubNav("BEAUTY");
                }}
                onMouseLeave={this.handleSubNavBarToggleOFF}
              >
                BEAUTY
              </NavItem>
            </NavItemsContainer>

            <SearchBar>
              <FontIcon icon={faSearch} />
            </SearchBar>
          </Navbar>

          {this.state.toggleSubHeader && (
            <SubHeaderContainer
              onMouseEnter={this.handleSubNavBarToggleON}
              onMouseLeave={this.handleSubNavBarToggleOFF}
            >
              {this.state.currentNav === "LIFESTYLE" && <LifeStyleSubHeader />}
              {this.state.currentNav === "OUTFITS" && <OutfitsStyleSubHeader />}
            </SubHeaderContainer>
          )}
        </HeaderContainer>
      </>
    );
  }
}

export default withRouter(Header);
