import styled from "styled-components";
import MainTheme from "../../Theme";

const AuthScreenContainer = styled.div`
  width: 80vw;
  margin: auto;
  display: flex;
  height: 80vh;
  justify-content: space-evenly;
  align-items: flex-start;
`;
const AuthScreenInfoDiv = styled.div`
  padding: 10px 20px;
  width: 49%;

  h1 {
    font-family: ${MainTheme.fontFamily.oswald};
    color: ${MainTheme.fontColors.darkOrange};
  }
  h5 {
    font-family: ${MainTheme.fontFamily.montiserrat};
  }
  p {
    font-family: ${MainTheme.fontFamily.roboto};
    color: ${MainTheme.fontColors.gray};
  }
`;
const AuthScreenDivider = styled.div`
  background-color: ${MainTheme.backgroundColour.BG_ORANGE};
  width: 1%;
  height: 500px;
`;
const AuthScreenAuthOptionsDiv = styled.div`
  width: 49%;
  padding: 10px 20px;
`;

const GoogleSignInContainer = styled.div`
  display: flex;
  background-color: ${MainTheme.buttonTheme.google.backgroundColor};
  width: 100%;
  height: 50px;
  margin: 30px 0px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  color: white;
  span :nth-child(1) {
    margin: 0px 40px 0px 20px;
    font-size: ${MainTheme.fontSize.extraLarge};
  }
  .google-container-title {
    font-size: ${MainTheme.fontSize.medium};
    font-weight: ${MainTheme.fontWeight.bold};
    font-family: ${MainTheme.fontFamily.roboto};
  }
`;

export {
  AuthScreenContainer,
  AuthScreenInfoDiv,
  AuthScreenDivider,
  AuthScreenAuthOptionsDiv,
  GoogleSignInContainer,
};
