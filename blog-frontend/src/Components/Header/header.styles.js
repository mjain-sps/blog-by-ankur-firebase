import styled, { css } from "styled-components";
import MainTheme from "../../Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const HeaderContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: absolute;
  top: 0%;
  left: 0%;
  @media (max-width: 576px) {
    height: 40vh;
  }
`;

const SocialMediaDiv = styled.div`
  height: 12%;
  width: 70%;
  margin: auto;
  border-bottom: ${MainTheme.backgroundColour.BG_WHITESMOKE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${MainTheme.fontFamily.montiserrat};
  color: ${MainTheme.fontColors.black};
  font-size: ${MainTheme.fontSize.medium};
  font-weight: ${MainTheme.fontWeight.medium};
  @media (max-width: 768px) {
    width: 100%;
    padding: 5px 20px 0px 15px;
    margin: 0px;
  }
`;
const SocialMediaDivRightSideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  a {
    color: ${MainTheme.fontColors.black};
  }
  @media (max-width: 576px) {
    width: max-content;
  }
`;
const LogoSection = styled.div`
  height: 78%;
  text-align: center;
`;
const Logo = styled.img`
  width: 50%;
  height: 100%;
  margin: auto;
  object-fit: contain;
`;

const Navbar = styled.div`
  height: 10%;
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-areas: "navitems . searchbar";
  align-items: center;
  @media (max-width: 576px) {
    width: 90%;
  }
`;

const NavItemsContainer = styled.div`
  grid-area: navitems;
  display: flex;
  justify-content: flex-start;
  width: 60%;
`;

const SubHeaderContainer = styled.div`
  display: block;
  width: 70%;
  height: 200px;
  margin: -6px auto;
  background-color: ${MainTheme.backgroundColour.BG_WHITESMOKE};
`;
const NavItem = styled(Link)`
  text-decoration: none;
  color: ${MainTheme.fontColors.black};
  font-family: ${MainTheme.fontFamily.montiserrat};
  margin: 0px 20px;
  &:hover {
    border-bottom: 1px solid pink;
    border-width: 2px;
  }

  ${(props) =>
    props.currentpath
      ? css`
          border-bottom: 1px solid pink;
        `
      : ""}
  border-width: 2px;
  padding: 10px 0px;
`;
const SearchBar = styled.div`
  grid-area: searchbar;
  text-align: end;
`;

const FontIcon = styled(FontAwesomeIcon)`
  margin: 0px 10px;
  font-size: ${MainTheme.fontSize.large};
  cursor: pointer;
`;
//All the exports are here

export {
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
};
