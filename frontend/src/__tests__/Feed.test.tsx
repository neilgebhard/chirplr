import Feed from "../page/Feed/Feed";
import { render, screen } from "../test-utils";

describe("Feed", () => {
  test("renders Feed component with tweets", async () => {
    render(<Feed />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect((await screen.findAllByRole("listitem")).length).toBe(4);

    expect(
      screen.getByText(
        /It's estimated that 240,000 new homes will have to be built every year in the UK for the next 20 years to satisfy the need for housing/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Royal Gala apples are the best selling apples in the UK, with 4 times more sales than British Cox apples/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /The world's oceans are absorbing the equivalent heat of 12 Hiroshima bombs per second/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /The human brain produces in 30 seconds as much data as the NASA Hubble Space telescope has produced in its lifetime/i
      )
    ).toBeInTheDocument();
  });
});
