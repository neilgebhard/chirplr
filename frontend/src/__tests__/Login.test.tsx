import Login from "../page/Login";
import { render, screen, fireEvent } from "../test-utils";

test("renders Login component with form and inputs", () => {
  render(<Login />);

  const email = screen.getByLabelText(/email/i);
  const password = screen.getByLabelText(/password/i);
  const loginBtn = screen.getByRole("button", { name: /log in/i });

  const fakeUser = {
    email: "test@email.com",
    password: "password123",
  };

  fireEvent.change(email, { target: { value: fakeUser.email } });
  fireEvent.change(password, { target: { value: fakeUser.password } });

  expect(screen.getByTestId("form")).toHaveFormValues({
    email: fakeUser.email,
    password: fakeUser.password,
  });

  expect(loginBtn).toBeEnabled();
});
