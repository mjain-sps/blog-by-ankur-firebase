import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LabelComponent from "./label.components";

describe("Label component", () => {
  test("label component snapshot testing", () => {
    const dummyProps = { htmlFor: "input-id" };
    const { container } = render(<LabelComponent {...dummyProps} />);

    expect(container).toMatchSnapshot();
  });
});
