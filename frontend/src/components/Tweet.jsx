import { useState } from "react";
import {
  ChatIcon,
  ShareIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useAuth } from "../context/auth";
import { classNames } from "../util";
import TweetBody from "./TweetBody";

const Tweet = (props) => {
  const [tweet, setTweet] = useState(props.tweet);
  const { _id } = tweet;
  const { user, setUser } = useAuth();

  const handleLike = () => {
    const keyword = liked ? "unlike" : "like";

    axios.post(`/api/tweets/${_id}/${keyword}`).then(({ data }) => {
      setTweet(data.tweet);
      setUser(data.user);
    });
  };

  const liked = tweet.likes.includes(user._id);

  return (
    <li className="flex border-b border-t border-gray-100 px-4 pt-3 pb-1 gap-x-2 hover:bg-gray-100 cursor-pointer">
      <div>
        <UserIcon className="h-12 w-12 text-gray-600" />
      </div>
      <div className="w-full">
        <TweetBody {...tweet} />
        <div className="flex justify-between max-w-sm text-gray-400">
          <button
            disabled
            title="Comment"
            className="flex items-center text-sm gap-x-3 p-2 hover:bg-blue-100 hover:text-blue-500 rounded-full cursor-not-allowed"
          >
            <ChatIcon className="h-5 w-5" /> 0
          </button>
          <button
            title="Retweet"
            className="flex items-center text-sm gap-x-3 p-2 hover:bg-green-100 hover:text-green-500 rounded-full cursor-not-allowed"
          >
            <ShareIcon className="h-5 w-5" /> 0
          </button>
          <button
            onClick={handleLike}
            title="Like"
            className={classNames(
              "flex items-center text-sm gap-x-3 p-2 hover:bg-red-100 hover:text-red-500 rounded-full",
              liked ? "text-red-500" : ""
            )}
          >
            <HeartIcon className="h-5 w-5" /> {tweet.likes.length}
          </button>
          <button
            title="Share"
            className="p-2 hover:bg-blue-100 hover:text-blue-500 rounded-full cursor-not-allowed"
          >
            <UploadIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Tweet;
