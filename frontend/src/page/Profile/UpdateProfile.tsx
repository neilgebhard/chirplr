import { useState } from "react";
import Modal from "react-modal";
import { UserCircleIcon, XIcon } from "@heroicons/react/solid";
import { useAuth } from "../../context/auth";
import axios from "axios";
import type { User } from "../../types";

Modal.setAppElement("#root");
Modal.defaultStyles = {}; // Flushes all of react-modal's styles

type AppProps = {
  modalIsOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setProfile: (user: User) => void;
};

const UpdateProfile = ({ modalIsOpen, setIsOpen, setProfile }: AppProps) => {
  const { user, setUser } = useAuth();

  const [name, setName] = useState(user.name || "");
  const [bio, setBio] = useState(user.bio || "");
  const [location, setLocation] = useState(user.location || "");
  const [website, setWebsite] = useState(user.website || "");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .put("/api/users", {
        name,
        bio,
        location,
        website,
      })
      .then(({ data }) => {
        setUser(data);
        setProfile(data);
        setIsOpen(false);
      })
      .catch((e) => {
        setError(true);
      });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Profile Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-x-6 py-2 pl-2 pr-4">
          <button type="button" onClick={() => setIsOpen(false)}>
            <XIcon className="h-10 w-10 text-gray-800 hover:bg-gray-200 rounded-full p-2" />
          </button>
          <h1 className="flex-grow font-bold text-xl">Edit profile</h1>
          <button
            className="font-bold bg-black hover:bg-gray-800 text-white rounded-full px-4 py-1"
            type="submit"
          >
            Save
          </button>
        </div>
        <div className="bg-gray-400 h-48 cursor-not-allowed"></div>
        <div className="relative ml-3">
          <UserCircleIcon className="h-28 w-28 text-gray-600 border-white bg-white rounded-full absolute -top-14" />
        </div>
        <div className="px-4 mt-16">
          <label
            className="block tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-400"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            className="block tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="bio"
          >
            Bio
          </label>
          <textarea
            className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-400"
            id="bio"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <label
            className="block tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-400"
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label
            className="block tracking-wide text-gray-700 text-xs mb-2"
            htmlFor="website"
          >
            Website
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-400"
            id="website"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          {error && (
            <p className="text-red-500">There seems to have been an error.</p>
          )}
        </div>
      </form>
    </Modal>
  );
};

export default UpdateProfile;
