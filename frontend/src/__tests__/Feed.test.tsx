import Feed from "../page/Feed";
import { render, screen } from "../test-utils";

describe("Feed", () => {
  test("renders Feed component with tweets", async () => {
    render(<Feed />);
    expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();
    expect((await screen.findAllByRole("listitem")).length).toBe(1);

    expect(
      screen.getByText(
        /It's estimated that 240,000 new homes will have to be built every year in the UK for the next 20 years to satisfy the need for housing/i
      )
    ).toBeInTheDocument();
  });
});
