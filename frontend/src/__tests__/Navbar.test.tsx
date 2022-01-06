import Navbar from "../components/Navbar";
import { render, screen } from "../test-utils";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("link", { name: /home/i })).toHaveLength(2);
    expect(screen.getByRole("link", { name: /explore/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /profile/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /tiffany valencia/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /tiffany123/i })
    ).toBeInTheDocument();
  });
});
