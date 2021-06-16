import React from "react";
import { customRender, fireEvent } from "../../../custom-render-test-utils";
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

  test("check button test if all inputs are found to be correct", (done) => {
    const { getByTestId, getByText } = customRender(<Signup />);
    const emailInput = getByTestId("email");
    const passwordInput = getByTestId("password");
    const passwordInput2 = getByTestId("password2");
    fireEvent.change(emailInput, { target: { value: "madhur" } });
    fireEvent.change(passwordInput, { target: { value: "XYZ" } });
    fireEvent.change(passwordInput2, { target: { value: "XYZ" } });
    const buttonElement = getByText(/login/i);
    expect.assertions(1);
    fireEvent.click(buttonElement);
    done();
    expect(window.location.href).toBe("http://localhost/");
  });

  test("check button test if email is left blank", (done) => {
    jest.spyOn(window, "alert").mockImplementation(() => {});

    const { getByTestId, getByText } = customRender(<Signup />);
    // const emailInput = getByTestId("email");
    const passwordInput = getByTestId("password");
    const passwordInput2 = getByTestId("password2");
    // fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "XYZ" } });
    fireEvent.change(passwordInput2, { target: { value: "XYZ" } });
    const buttonElement = getByText(/login/i);

    fireEvent.click(buttonElement);
    done();
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  test("check button test if password is left blank", (done) => {
    jest.spyOn(window, "alert").mockImplementation(() => {});

    const { getByTestId, getByText } = customRender(<Signup />);
    const emailInput = getByTestId("email");
    // const passwordInput = getByTestId("password");
    const passwordInput2 = getByTestId("password2");
    fireEvent.change(emailInput, { target: { value: "" } });
    // fireEvent.change(passwordInput, { target: { value: "XYZ" } });
    fireEvent.change(passwordInput2, { target: { value: "XYZ" } });
    const buttonElement = getByText(/login/i);

    fireEvent.click(buttonElement);
    done();
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  test("check button test if password2 is left blank", (done) => {
    jest.spyOn(window, "alert").mockImplementation(() => {});

    const { getByTestId, getByText } = customRender(<Signup />);
    const emailInput = getByTestId("email");
    const passwordInput = getByTestId("password");
    // const passwordInput2 = getByTestId("password2");
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "XYZ" } });
    // fireEvent.change(passwordInput2, { target: { value: "XYZ" } });
    const buttonElement = getByText(/login/i);

    fireEvent.click(buttonElement);
    done();
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  test("check button test if password and password2 do not match", (done) => {
    jest.spyOn(window, "alert").mockImplementation(() => {});

    const { getByTestId, getByText } = customRender(<Signup />);
    const emailInput = getByTestId("email");
    const passwordInput = getByTestId("password");
    const passwordInput2 = getByTestId("password2");
    fireEvent.change(emailInput, { target: { value: "mjain.sps@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "XYZ" } });
    fireEvent.change(passwordInput2, { target: { value: "XYAAZ" } });
    const buttonElement = getByText(/login/i);

    fireEvent.click(buttonElement);
    done();
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  test("to check what happens is we pass an initial state with user object", () => {
    const userObject = {
      id: "XYZ",
      name: "madhur jain",
      email: "mjain@gmail.com",
    };
    customRender(<Signup />, {
      initialState: { user: userObject },
    });
    expect(window.location.href).toBe("http://localhost/");
  });
});
