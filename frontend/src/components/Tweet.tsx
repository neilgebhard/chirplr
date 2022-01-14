import { useState } from "react";
import { UserIcon } from "@heroicons/react/solid";
import TweetBody from "./TweetBody";
import TweetFooter from "./TweetFooter";
import type { Tweet as TweetType } from "../types";

type Props = {
  tweet: TweetType;
};

const Tweet = (props: Props) => {
  const [tweet, setTweet] = useState(props.tweet);

  return (
    <li className="flex border-b border-t border-gray-100 px-4 pt-3 pb-1 gap-x-2 hover:bg-gray-100 cursor-pointer">
      <div>
        <UserIcon className="h-12 w-12 text-gray-600" />
      </div>
      <div className="w-full">
        <TweetBody {...tweet} />
        <TweetFooter {...tweet} setTweet={setTweet} />
      </div>
    </li>
  );
};

export default Tweet;
