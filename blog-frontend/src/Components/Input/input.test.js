import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputComponent from "./input.textbox.component";
describe("Input component", () => {
  test("check input snapshot", () => {
    const dummyProps = {
      placeholder: "dummy input",
      value: "Madhur Jain",
      onChange: jest.fn(),
      name: "email",
      maxLength: 16,
      type: "email",
      id: "email-id",
    };
    const { container } = render(<InputComponent {...dummyProps} />);
    expect(container).toMatchSnapshot();
  });
});
