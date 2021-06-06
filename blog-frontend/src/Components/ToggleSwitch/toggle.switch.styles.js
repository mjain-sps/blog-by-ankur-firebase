import styled, { css } from "styled-components";
import MainTheme from "../../Theme";
const ToggleInput = styled.input`
  opacity: 0;
  width: 0px;
  height: 0px;
  &:checked ~ span {
    transform: translateX(26px);
  }
`;

const ToggleLabel = styled.label`
  width: 60px;
  height: 34px;
  background-color: ${MainTheme.backgroundColour.BG_ORANGE};
  position: relative;
  display: inline-block;
  ${(props) =>
    props.rounded &&
    css`
      border-radius: 26px;
    `}
`;

const ToggleSpan = styled.span`
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  cursor: pointer;
  transition: 400ms ease;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    top: 4px;
    left: 4px;
    background-color: white;

    ${(props) =>
      props.rounded &&
      css`
        border-radius: 26px;
      `}
  }
`;

export { ToggleLabel, ToggleInput, ToggleSpan };
