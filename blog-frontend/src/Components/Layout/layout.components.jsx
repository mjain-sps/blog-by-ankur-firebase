import React from "react";
import Header from "../Header/header.component";
import { LayoutContainer } from "./layout.styles.js";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};
export default Layout;
