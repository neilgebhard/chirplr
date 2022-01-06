import Tweet from "../components/Tweet";
import { render, screen } from "../test-utils";

const tweet = {
  _id: "61a8337f9216bd92ed9cb0c8",
  username: "johndoe",
  name: "John Doe",
  user: "61a833539216bd92ed9cb0be",
  text: "“The human body contains enough carbon to provide 'lead' (which is really graphite) for about 9,000 pencils”",
  replies: [],
  createdAt: "2021-12-02T02:46:23.982Z",
  updatedAt: "2021-12-24T11:35:41.241Z",
  likes: ["61ac94978f3295684634c163"],
};

describe("Tweet", () => {
  test("renders Tweet component", () => {
    render(<Tweet tweet={tweet} />);
    expect(
      screen.getByText(tweet.username, { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText(tweet.name)).toBeInTheDocument();
    expect(screen.getByText(tweet.text)).toBeInTheDocument();
  });
});
