import React from "react";
import { Input } from "./input.styles.js";
const InputComponent = ({
  placeholder,
  value,
  onChange,
  name,
  maxLength,
  type,
  id,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      maxLength={maxLength}
      type={type}
      id={id}
    />
  );
};

export default InputComponent;
