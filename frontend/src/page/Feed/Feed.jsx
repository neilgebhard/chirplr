import { useState, useEffect } from "react";
import axios from "axios";
import Tweet from "../../components/Tweet";
import AddTweet from "./AddTweet";

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = () => {
    axios.get("/api/tweets/feed").then(({ data }) => {
      data.reverse();
      setTweets(data);
    });
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  const handleAddTweet = (e) => {
    e.preventDefault();

    const text = e.target.elements.name.value;

    if (!text) return;

    axios
      .post("/api/tweets", {
        text,
      })
      .then((data) => {
        fetchTweets();
        e.target.elements.name.value = "";
      });
  };

  return (
    <div className="w-600 border border-gray-100">
      <h1 className="text-xl font-bold p-4 border-b border-gray-100">Home</h1>
      <AddTweet handleAddTweet={handleAddTweet} />
      <ul>
        {tweets.map((tweet) => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </ul>
    </div>
  );
};

export default Feed;
