import styled from "styled-components";
import MainTheme from "../../Theme";

const HeaderContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-color: ${MainTheme.backgroundColour.BG_ORANGE};
  position: absolute;
  top: 0%;
  left: 0%;
`;

const SocialMediaDiv = styled.div`
  height: 5%;
  border-bottom: ${MainTheme.backgroundColour.BG_WHITESMOKE};
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  align-items: center;
  font-family: ${MainTheme.fontFamily.montiserrat};
  color: ${MainTheme.fontColors.black};
  font-size: ${MainTheme.fontSize.medium};
`;
const Logo = styled.div`
  height: 80%;
`;

const Navbar = styled.div`
  height: 10%;
`;
//All the exports are here

export { HeaderContainer, SocialMediaDiv, Logo, Navbar };
