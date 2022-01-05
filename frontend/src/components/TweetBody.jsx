import { Link } from "react-router-dom";
import moment from "moment";

const TweetBody = ({ name, username, createdAt, text }) => {
  return (
    <>
      <Link to={`/${username}`}>
        <span className="font-bold hover:underline">{name}</span>
      </Link>
      <span className="text-gray-500 ml-1">@{username}</span>
      <span className="text-gray-500 ml-1">·</span>
      <span className="text-gray-500 ml-1">{moment(createdAt).fromNow()}</span>
      <p>{text}</p>
    </>
  );
};

export default TweetBody;
