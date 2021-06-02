import React from "react";
import { LoaderContainer, Loader, LoadingDot } from "./loader.styles";
const LoaderComponent = () => {
  return (
    <LoaderContainer>
      <Loader>
        <LoadingDot />
        <LoadingDot />
        <LoadingDot />
      </Loader>
    </LoaderContainer>
  );
};

export default LoaderComponent;
