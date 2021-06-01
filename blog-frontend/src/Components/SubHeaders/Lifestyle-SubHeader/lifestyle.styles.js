import styled from "styled-components";
import MainTheme from "../../../Theme";
const LifeStyleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
`;
const LifeStyleSideNav = styled.div`
  background-color: ${MainTheme.backgroundColour.BG_WHITESMOKE};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  overflow: hidden;
  border-right: 1px solid rgba(125, 125, 125, 0.4);
  box-shadow: -2px 0px 2px rgba(125, 125, 125, 0.4);
`;
const ListStylesNavItem = styled.div`
  cursor: pointer;
  width: 100%;
  font-family: ${MainTheme.fontFamily.montiserrat};
  font-size: ${MainTheme.fontSize.medium};
  text-align: right;
  padding: 6px 6px 6px 0px;
  &:hover {
    color: ${MainTheme.fontColors.lightOrange};
    background-color: ${MainTheme.backgroundColour.BG_WHITE};
    border-top: 1px solid rgba(125, 125, 125, 0.4);
    border-bottom: 1px solid rgba(125, 125, 125, 0.4);
  }
`;

const LifeStyleMainContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
`;

export {
  LifeStyleContainer,
  LifeStyleSideNav,
  LifeStyleMainContent,
  ListStylesNavItem,
};
