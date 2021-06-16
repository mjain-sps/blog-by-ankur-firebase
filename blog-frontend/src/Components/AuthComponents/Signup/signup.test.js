import React from "react";
import {
  customRender,
  fireEvent,
  waitFor,
} from "../../../custom-render-test-utils";
import "@testing-library/jest-dom/extend-expect";
import Signup from "./signup.components";

describe("Signup components tests", () => {
  test("To take a snapshot of component", () => {
    const { container } = customRender(<Signup />);
    expect(container).toMatchSnapshot();
  });

  test("check input email", () => {
    const { getByTestId } = customRender(<Signup />);
    const emailInput = getByTestId("email");
    fireEvent.change(emailInput, { target: { value: "madhur" } });
    expect(emailInput.value).toBe("madhur");
  });

  test("check input password", () => {
    const { getByTestId } = customRender(<Signup />);
    const passwordInput = getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "XYZ" } });
    expect(passwordInput.value).toBe("XYZ");
  });

  test("check input password2", () => {
    const { getByTestId } = customRender(<Signup />);
    const passwordInput2 = getByTestId("password2");
    fireEvent.change(passwordInput2, { target: { value: "Ramjane" } });
    expect(passwordInput2.value).toBe("Ramjane");
  });

  // test("check button test", (done) => {
  //   const { getByTestId } = customRender(<Signup user={name:'madhur jain'} />);
  //   const emailInput = getByTestId("email");
  //   const passwordInput = getByTestId("password");
  //   const passwordInput2 = getByTestId("password2");
  //   fireEvent.change(emailInput, { target: { value: "madhur" } });
  //   fireEvent.change(passwordInput, { target: { value: "XYZ" } });
  //   fireEvent.change(passwordInput2, { target: { value: "XYZ" } });
  //   const buttonElement = getByTestId("signup-button");
  //   expect.assertions(1);
  //   fireEvent.click(buttonElement);
  //   expect(window.location.href).toBe("/");
  //   done();
  // });
});
