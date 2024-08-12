import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import LoginForm from "./LoginForm";

test('should shows two inputs & a button', () => {
    // render the component
    render(<LoginForm />)

    // Manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    //Assertion - make sure the component is doing what we expect it to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
})