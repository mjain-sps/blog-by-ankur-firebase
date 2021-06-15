import React from "react";
import { render } from "@testing-library/react";
import ToggleSwitch from "./toggle.switch.component";

test("snapshot testing of component", () => {
  const { container } = render(<ToggleSwitch />);
  expect(container).toMatchSnapshot();
});
