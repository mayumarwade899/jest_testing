import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import LoginForm from "./LoginForm";

test("should shows two inputs & a button", () => {
  // render the component
  render(<LoginForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //Assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("should calls onUserAdd when the form is submitted", () => {
  const mock = jest.fn();

  // Render my Component
  render(<LoginForm onUserAdd={mock} />);

  // Find the two inputs
  const inputName = screen.getByRole('textbox', {
    name: /name/i,
  });

  const inputEmail = screen.getByRole('textbox', {
    name: /email/i,
  });

  // Simulate typing in a name
  user.click(inputName);
  user.keyboard("mayur");

  // Simulate typing in a email
  user.click(inputEmail);
  user.keyboard("mayur@gmail.com");

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  user.click(button);

  // Assertion to make sure 'onUserAdd' gets called with name & email
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "mayur",
    email: "mayur@gmail.com",
  });
});
