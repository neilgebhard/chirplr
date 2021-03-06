import Navbar from "../components/Navbar";
import { render, screen } from "../test-utils";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("link", { name: /home/i })).toHaveLength(2);
    expect(screen.getByRole("link", { name: /explore/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /profile/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /test name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /test123/i })
    ).toBeInTheDocument();
  });
});
