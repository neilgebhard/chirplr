import {
  ChatIcon,
  ShareIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { classNames } from "../util";
import axios from "axios";
import { useAuth } from "../context/auth";

type Tweet = {
  _id: string;
  likes: string[];
  username: string;
  name: string;
  text: string;
  replies: object[];
  createdAt: string;
  updatedAt: string;
};

type Props = {
  _id: string;
  likes: string[];
  setTweet: (tweet: Tweet) => void;
};

const TweetFooter = ({ _id, likes, setTweet }: Props) => {
  const { user, setUser } = useAuth();
  const liked = likes.includes(user._id);

  const handleLike = () => {
    const keyword = liked ? "unlike" : "like";

    axios.post(`/api/tweets/${_id}/${keyword}`).then(({ data }) => {
      setTweet(data.tweet);
      setUser(data.user);
    });
  };

  return (
    <>
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
          <HeartIcon className="h-5 w-5" /> {likes.length}
        </button>
        <button
          title="Share"
          className="p-2 hover:bg-blue-100 hover:text-blue-500 rounded-full cursor-not-allowed"
        >
          <UploadIcon className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};

export default TweetFooter;
