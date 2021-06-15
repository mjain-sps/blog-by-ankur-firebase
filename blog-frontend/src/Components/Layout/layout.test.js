import React from "react";
import { customRender } from "../../custom-render-test-utils";
import "@testing-library/jest-dom/extend-expect";
import Layout from "./layout.components";

test("Check snapshot layout", () => {
  const { container } = customRender(<Layout />);
  expect(container).toMatchSnapshot();
});
