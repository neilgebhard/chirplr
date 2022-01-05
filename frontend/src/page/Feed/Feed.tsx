import React, { useState, useEffect } from "react";
import axios from "axios";
import Tweet from "../../components/Tweet";
import AddTweet from "./AddTweet";
import { Tweet as TweetType } from "../../dataStructure";

const Feed = () => {
  const [tweets, setTweets] = useState<TweetType[]>([]);

  const fetchTweets = () => {
    axios.get("/api/tweets/feed").then(({ data }) => {
      data.reverse();
      setTweets(data);
    });
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  const onAddTweet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      text: { value: string };
    };

    const text = target.text.value;

    if (!text) return;

    axios
      .post("/api/tweets", {
        text,
      })
      .then((data) => {
        fetchTweets();
        target.text.value = "";
      });
  };

  return (
    <div className="w-600 border border-gray-100">
      <h1 className="text-xl font-bold p-4 border-b border-gray-100">Home</h1>
      <AddTweet handleAddTweet={onAddTweet} />
      <ul>
        {tweets.map((tweet) => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </ul>
    </div>
  );
};

export default Feed;
