import styled, { css } from "styled-components";
import MainTheme from "../../../Theme";
const AuthContainer = styled.div`
  width: 40vw;
  height: 70vh;
  margin: auto;
  border: 1px solid rgba(125, 125, 125, 0.4);
  box-shadow: 2px 0px 2px rgba(125, 125, 125, 0.4);
  padding: 0px 15px;
`;

const AuthTitle = styled.div`
  padding: 10px;
  text-align: center;
  span {
    font-size: ${MainTheme.fontSize.large};
    color: ${MainTheme.fontColors.black};
    font-family: ${MainTheme.fontFamily.montiserrat};
    font-weight: ${MainTheme.fontWeight.bold};
    border-bottom: 3px solid ${MainTheme.backgroundColour.BG_ORANGE};
  }
`;

const AuthForm = styled.form`
  border: ${MainTheme.fontColors.lightOrange};
  padding: 15px 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
`;

const AuthFormControl = styled.div`
  position: relative;
  margin: 10px 0px;
  height: 60px;
  background-color: ${MainTheme.backgroundColour.BG_WHITE};
  border-bottom: 1px solid ${MainTheme.fontColors.black};
`;
const AuthInput = styled.input`
  outline: none;
  width: 100%;
  padding: 10px;
  display: block;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border: none;
`;

const AuthLabel = styled.div`
  font-family: ${MainTheme.fontFamily.oswald};
  font-size: ${MainTheme.fontSize.medium};
  color: ${MainTheme.fontColors.gray};
  position: absolute;
  top: 60%;
  z-index: 2;
  transition: 200ms ease-in;
  ${(props) =>
    props.name === props.focus || props.value
      ? css`
          top: 5%;
          font-size: ${MainTheme.fontSize.small};
          color: ${MainTheme.fontColors.black};
        `
      : ""}
`;

export {
  AuthContainer,
  AuthTitle,
  AuthForm,
  AuthInput,
  AuthFormControl,
  AuthLabel,
};
