import { useState, useEffect } from "react";
import axios from "axios";
import Tweet from "../components/Tweet";

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = () => {
      axios.get("/api/tweets").then(({ data }) => {
        data.reverse();
        setTweets(data);
      });
    };

    fetchTweets();
  }, []);

  return (
    <div className="w-600 border border-gray-100">
      <h1 className="text-xl font-bold p-4 border-b border-gray-100">
        Explore
      </h1>
      <ul>
        {tweets.map((tweet) => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </ul>
    </div>
  );
};

export default Feed;
