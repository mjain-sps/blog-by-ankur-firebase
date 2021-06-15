import React from "react";
import Header from "../Header/header.component";
import { LayoutContainer } from "./layout.styles.js";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </React.Fragment>
  );
};
export default Layout;
