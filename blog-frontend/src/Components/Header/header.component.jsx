import React from "react";

//importing the styled compoments
import { HeaderContainer } from "./header.styles.js";
class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <div>
          I am the Header
          <p>hello</p>
        </div>
      </HeaderContainer>
    );
  }
}

export default Header;
