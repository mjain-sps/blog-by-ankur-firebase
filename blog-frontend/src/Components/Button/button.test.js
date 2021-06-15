import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ButtonComponent from "./button.component";

describe("check the button component snapshot", () => {
  const dummyProps = {
    type: "button",
    onClick: jest.fn(),
    theme: "primary",
    width: "50%",
  };
  const dummyProps2 = {
    type: "button",
    onClick: jest.fn(),
    theme: "primary",
  };
  test("check snapshot if width present", () => {
    const { container } = render(<ButtonComponent {...dummyProps} />);
    expect(container).toMatchSnapshot();
  });
  test("check snapshot if width is null", () => {
    const { container } = render(<ButtonComponent {...dummyProps2} />);
    expect(container).toMatchSnapshot();
  });
});
