import React from "react";
import { Button } from "./button.styles.js";
class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { type, onClick, children, theme, width } = this.props;
    return (
      <Button
        type={type}
        onClick={onClick}
        theme={theme}
        width={width ? width : 90}
      >
        {children}
      </Button>
    );
  }
}

export default ButtonComponent;
