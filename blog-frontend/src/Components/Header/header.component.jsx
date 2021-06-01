import React from "react";
import { withRouter } from "react-router-dom";
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
} from "./header.styles.js";

import {
  faFacebookSquare,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//importing Logo
import logo from "../../Assets/Home-Page/Logo.jpeg";
//importing the SubHeader Components
import LifeStyleSubHeader from "../SubHeaders/Lifestyle-SubHeader/lifestyle.subheader.component";
import OutfitsStyleSubHeader from "../SubHeaders/Outfits-SubHeader/outfits.subheader.component";

//Main Component Starts
class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentNavItem: "",
      viewSubNavBar: false,
    };
  }
  render() {
    console.log(this.state);
    const currentDate = new Date();
    return (
      <>
        <HeaderContainer>
          <SocialMediaDiv>
            <div>{currentDate.toDateString()}</div>
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
                onMouseEnter={() =>
                  this.setState({ currentNavItem: "LIFESTYLE" })
                }
                // onMouseLeave={() => this.setState({ currentNavItem: "" })}
                currenthover={this.state.currentNavItem}
              >
                LIFESTYLE
              </NavItem>
              <NavItem
                to="/outfits"
                name="OUTFITS"
                currentpath={
                  this.props.location.pathname === "/outfits" ? "CURRENT" : null
                }
                onMouseEnter={() =>
                  this.setState({ currentNavItem: "OUTFITS" })
                }
                onMouseLeave={() => this.setState({ currentNavItem: "" })}
                currenthover={this.state.currentNavItem}
              >
                OUTFITS
              </NavItem>
              <NavItem to="/haircare">HAIRCARE</NavItem>
              <NavItem to="/makeup">MAKEUP</NavItem>
              <NavItem to="/beauty">BEAUTY</NavItem>
            </NavItemsContainer>

            <SearchBar>
              <FontIcon icon={faSearch} />
            </SearchBar>
          </Navbar>

          <SubHeaderContainer
            onMouseEnter={() => this.setState({ viewSubNavBar: true })}
            onMouseLeave={() => this.setState({ viewSubNavBar: false })}
          >
            {this.state.currentNavItem === "LIFESTYLE" && (
              <LifeStyleSubHeader />
            )}
            {this.state.currentNavItem === "OUTFITS" && (
              <OutfitsStyleSubHeader />
            )}
          </SubHeaderContainer>
        </HeaderContainer>
      </>
    );
  }
}

export default withRouter(Header);
