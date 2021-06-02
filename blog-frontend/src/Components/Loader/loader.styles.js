import styled, { keyframes } from "styled-components";
import MainTheme from "../../Theme";

const LoaderContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: ${MainTheme.backgroundColour.BG_WHITESMOKE};
`;

const loadingAnimation = keyframes`
from{
    opacity:0;
    transform: rotate(0)
}
to{
    opacity:100;
    transform: rotate(360)
}
`;

const Loader = styled.div`
  width: 300px;
  height: 300px;
  margin: 20vh auto;
  text-align: center;
  line-height: 300px;

  & :nth-child(2) {
    animation: ${loadingAnimation} 2s ease-in-out 0.4s infinite forwards;
  }
  & :nth-child(3) {
    animation: ${loadingAnimation} 2s ease-in-out 0.8s infinite forwards;
  }
`;

const LoadingDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  display: inline-block;
  margin: 0px 15px;
  animation: ${loadingAnimation} 2s ease-in-out 0s infinite forwards;
`;

export { LoaderContainer, Loader, LoadingDot };
