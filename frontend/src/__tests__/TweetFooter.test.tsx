import TweetFooter from "../components/TweetFooter";
import { render, screen } from "../test-utils";
import userEvent from "@testing-library/user-event";

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

describe("TweetBody", () => {
  test("renders TweetBody component", () => {
    render(<TweetFooter {...tweet} setTweet={jest.fn()} />);
    const likeBtn = screen.getByTitle(/like/i);
    userEvent.click(likeBtn);
    expect(likeBtn).toHaveClass("text-red-500");
  });
});
