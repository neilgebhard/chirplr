import Signup from "../page/Signup";
import { render, screen, fireEvent } from "../test-utils";

test("renders Signup component with form and inputs", () => {
  render(<Signup />);

  const name = screen.getByLabelText(/Name/);
  const username = screen.getByLabelText(/username/i);
  const email = screen.getByLabelText(/email/i);
  const password = screen.getByLabelText(/password/i);
  const signupBtn = screen.getByRole("button", { name: /sign up/i });

  const fakeUser = {
    name: "test name",
    username: "testusername",
    email: "test@email.com",
    password: "password123",
  };

  fireEvent.change(name, { target: { value: fakeUser.name } });
  fireEvent.change(username, { target: { value: fakeUser.username } });
  fireEvent.change(email, { target: { value: fakeUser.email } });
  fireEvent.change(password, { target: { value: fakeUser.password } });

  expect(screen.getByTestId("form")).toHaveFormValues({
    name: fakeUser.name,
    username: fakeUser.username,
    email: fakeUser.email,
    password: fakeUser.password,
  });

  expect(signupBtn).toBeEnabled();
});
