import React from "react";
import { Button } from "./button.styles.js";
const ButtonComponent = ({ type, onClick, children, theme, width }) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      theme={theme}
      width={width ? width : 100}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
