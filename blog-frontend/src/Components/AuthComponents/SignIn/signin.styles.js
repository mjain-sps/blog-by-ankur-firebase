import { faMandalorian } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import MainTheme from "../../../Theme";
const AuthContainer = styled.div`
  width: 60vw;
  height: 70vh;
  margin: auto;
  border: 1px solid rgba(125, 125, 125, 0.4);
  box-shadow: 2px 0px 2px rgba(125, 125, 125, 0.4);
  background-color: ${MainTheme.backgroundColour.BG_WHITESMOKE};
`;

const AuthTitle = styled.div`
padding: 10px;
text-align:center
span{
    font-size: ${MainTheme.fontSize.large};
    color: ${MainTheme.fontColors.darkOrange};
    font-family: ${MainTheme.fontFamily.montiserrat};
    font-weight: ${MainTheme.fontWeight.bold};\
}
`;

export { AuthContainer, AuthTitle };
