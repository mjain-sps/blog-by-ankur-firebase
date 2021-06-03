import styled, { css } from "styled-components";
import MainTheme from "../../Theme";
const Button = styled.button`
  border: none;
  padding: 10px;
  text-align: center;
  font-family: ${MainTheme.fontFamily.roboto};
  font-weight: ${MainTheme.fontWeight.bolder};
  cursor: pointer;
  ${(props) => css`
    background-color: ${MainTheme.buttonTheme[props.theme].backgroundColor};
    color: ${MainTheme.buttonTheme[props.theme].color};
    width: ${props.width}%;
  `};
`;

export { Button };
