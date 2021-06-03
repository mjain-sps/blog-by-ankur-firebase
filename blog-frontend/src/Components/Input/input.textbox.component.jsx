import React from "react";
import { Input } from "./input.styles.js";
class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { placeholder, value, onChange, name, maxLength, type, id } =
      this.props;
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
  }
}

export default InputComponent;
