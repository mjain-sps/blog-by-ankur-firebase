import React from "react";
import { Label } from "./label.styles.js";
const LabelComponent = ({ htmlFor, children }) => {
  return <Label htmlFor={htmlFor}>{children}</Label>;
};

export default LabelComponent;
