import React from "react";

//importing the styled compoments
import {
  HeaderContainer,
  SocialMediaDiv,
  Logo,
  Navbar,
} from "./header.styles.js";
class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <SocialMediaDiv>
          <div>DATE</div>
          <div>
            <span>ICON 1</span>
            <span>ICON 2</span>
            <span>ICON 3</span>
            <span>ICON 4</span>
          </div>
        </SocialMediaDiv>
        <Logo></Logo>
        <Navbar></Navbar>
      </HeaderContainer>
    );
  }
}

export default Header;
