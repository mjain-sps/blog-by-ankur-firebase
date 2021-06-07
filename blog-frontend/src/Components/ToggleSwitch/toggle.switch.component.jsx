import React from "react";
import { ToggleLabel, ToggleInput, ToggleSpan } from "./toggle.switch.styles";

const ToggleSwitch = ({
  id,
  checked,
  value,
  rounded,
  onChange,
  defaultChecked,
}) => {
  return (
    <ToggleLabel rounded={rounded} htmlFor={id}>
      <ToggleInput
        type="checkbox"
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <ToggleSpan rounded={rounded} />
    </ToggleLabel>
  );
};

export default ToggleSwitch;
