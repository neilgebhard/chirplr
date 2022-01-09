import { render, screen } from "../test-utils";
import Profile from "../page/Profile";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    username: "test",
  }),
  useRouteMatch: () => ({ url: "/test" }),
}));

test("renders Profile component", async () => {
  render(<Profile />);
  expect(
    await screen.findByRole("heading", { name: /test name/i })
  ).toBeInTheDocument();
  expect(await screen.findByText(/test123/i)).toBeInTheDocument();
  expect(await screen.findByText(/test bio/i)).toBeInTheDocument();
  expect(await screen.findByText(/test location/i)).toBeInTheDocument();
  expect(
    await screen.findByRole("link", { name: /https:\/\/www.test.com/i })
  ).toBeInTheDocument();
});
