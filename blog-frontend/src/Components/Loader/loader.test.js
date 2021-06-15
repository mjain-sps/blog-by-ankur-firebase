import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoaderComponent from "./loader.component";

test("check snapshot of loader component", () => {
  const { container } = render(<LoaderComponent />);
  expect(container).toMatchSnapshot();
});
