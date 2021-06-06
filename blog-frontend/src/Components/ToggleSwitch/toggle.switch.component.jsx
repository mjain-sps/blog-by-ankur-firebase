import React from "react";
import { ToggleLabel, ToggleInput, ToggleSpan } from "./toggle.switch.styles";

const ToggleSwitch = ({ id, checked, value, rounded, onChange }) => {
  return (
    <ToggleLabel rounded={rounded} htmlFor={id}>
      <ToggleInput
        type="checkbox"
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <ToggleSpan rounded={rounded} />
    </ToggleLabel>
  );
};

export default ToggleSwitch;
