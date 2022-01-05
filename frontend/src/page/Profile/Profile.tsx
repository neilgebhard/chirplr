import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { UserCircleIcon } from "@heroicons/react/solid";
import {
  CalendarIcon,
  LocationMarkerIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import moment from "moment";
import UpdateProfile from "./UpdateProfile";
import Tweet from "../../components/Tweet";
import type { User, Tweet as TweetType } from "./../../dataStructure";

const Profile = () => {
  const { user, setUser } = useAuth();

  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [profile, setProfile] = useState<User>({} as User);
  const [modalIsOpen, setIsOpen] = useState(false);

  const params = useParams();

  const {
    _id,
    name,
    username,
    bio,
    location,
    website,
    followers,
    following,
    createdAt,
  } = profile;

  useEffect(() => {
    axios.get(`/api/users/${params.username}`).then(({ data }) => {
      setProfile(data);
    });

    axios.get(`/api/users/${params.username}/tweets`).then(({ data }) => {
      data.reverse();
      setTweets(data);
    });
  }, [params.username]);

  const handleFollow = () => {
    axios.post(`/api/users/${_id}/follow`).then(({ data }) => {
      setUser(data.user);
      setProfile(data.userToFollow);
    });
  };

  const handleUnfollow = () => {
    axios.post(`/api/users/${_id}/unfollow`).then(({ data }) => {
      setUser(data.user);
      setProfile(data.userToUnfollow);
    });
  };

  return (
    <div className="w-600 border border-gray-100">
      <h1 className="text-xl font-bold p-4 border-b border-gray-100">{name}</h1>
      <div className="bg-gray-400 h-48"></div>
      <div className="px-3">
        <div className="flex justify-between pt-3 mb-3">
          <div className="relative">
            <UserCircleIcon className="h-28 w-28 text-gray-600 border-white bg-white rounded-full absolute -top-14" />
          </div>
          {username === user.username ? (
            <button
              onClick={() => setIsOpen(true)}
              className="hover:bg-gray-200 border border-gray-300 px-4 py-2 font-bold rounded-full"
            >
              Edit Profile
            </button>
          ) : !profile.followers?.includes(user._id) ? (
            <button
              onClick={handleFollow}
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 font-bold rounded-full"
            >
              Follow
            </button>
          ) : (
            <button
              onClick={handleUnfollow}
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 font-bold rounded-full"
            >
              Following
            </button>
          )}
        </div>
        <div className="font-bold text-xl">{name}</div>
        <div className="text-gray-500 mb-2">@{username}</div>
        <div className="mb-2">{bio}</div>
        <div className="flex gap-x-3 text-gray-500 mb-2">
          <span className="inline-flex items-center gap-x-1">
            <CalendarIcon className="h-5 w-5" /> Joined{" "}
            {moment(createdAt).format("MMMM YYYY")}
          </span>
          {location && (
            <span className="inline-flex items-center gap-x-1">
              <LocationMarkerIcon className="h-5 w-5" /> {location}
            </span>
          )}
          {website && (
            <span className="inline-flex items-center gap-x-1">
              <LinkIcon className="h-5 w-5" />{" "}
              <a
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noreferrer"
                href={website}
              >
                {website}
              </a>
            </span>
          )}
        </div>
        <div className="mb-5">
          <span>
            <strong>{following?.length}</strong>{" "}
            <span className="text-gray-500">Following</span>
          </span>
          <span className="ml-5">
            <strong>{followers?.length}</strong>{" "}
            <span className="text-gray-500">Followers</span>
          </span>
        </div>
      </div>
      <ul>
        {tweets.map((tweet) => (
          <Tweet key={tweet._id} tweet={tweet} />
        ))}
      </ul>
      <UpdateProfile
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        setProfile={setProfile}
      />
    </div>
  );
};

export default Profile;
