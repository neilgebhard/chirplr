/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { UserCircleIcon, ChatAlt2Icon } from "@heroicons/react/solid";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import { classNames } from "../util";

const Navbar = () => {
  const { name, username } = useAuth().user;
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post("/api/logout").then(() => {
      setUser({});
      navigate("/");
    });
  };

  return (
    <nav className="flex flex-col justify-between w-60 h-screen sticky top-0">
      <div className="flex flex-col">
        <NavLink to="/">
          <ChatAlt2Icon className="h-14 w-14 mb-2 p-2 text-blue-500 hover:bg-blue-100 rounded-full" />
        </NavLink>
        <NavLink
          className="flex items-center gap-x-5 mb-3 px-4 py-2 hover:bg-gray-200 rounded-full text-xl"
          to="/"
        >
          <HomeIcon className="h-7 w-7" /> <span>Home</span>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-5 mb-3 px-4 py-2 hover:bg-gray-200 rounded-full text-xl"
          to="/explore"
        >
          <HashtagIcon className="h-7 w-7" /> <span>Explore</span>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-5 mb-3 px-4 py-2 hover:bg-gray-200 rounded-full text-xl cursor-not-allowed text-gray-400"
          to="/notifications"
        >
          <BellIcon className="h-7 w-7" /> <span>Notifications</span>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-5 mb-3 px-4 py-2 hover:bg-gray-200 rounded-full text-xl cursor-not-allowed text-gray-400"
          to="/messages"
        >
          <MailIcon className="h-7 w-7" /> <span>Messages</span>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-5 mb-3 px-4 py-2 hover:bg-gray-200 rounded-full text-xl cursor-not-allowed text-gray-400"
          to="/bookmarks"
        >
          <BookmarkIcon className="h-7 w-7" /> <span>Bookmarks</span>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-5 mb-3 px-4 py-2 hover:bg-gray-200 rounded-full text-xl cursor-not-allowed text-gray-400"
          to="/lists"
        >
          <ClipboardListIcon className="h-7 w-7" /> <span>Lists</span>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-5 mb-3 px-4 py-2 hover:bg-gray-200 rounded-full text-xl"
          to={`/${username}`}
        >
          <UserIcon className="h-7 w-7" /> <span>Profile</span>
        </NavLink>
        <NavLink
          className="flex items-center gap-x-5 mb-3 px-4 py-2 hover:bg-gray-200 rounded-full text-xl cursor-not-allowed text-gray-400"
          to="/more"
        >
          <DotsCircleHorizontalIcon className="h-7 w-7" /> <span>More</span>
        </NavLink>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold block py-4 mt-3 rounded-full">
          Tweet
        </button>
      </div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex gap-x-2 mb-3 px-3 py-2 hover:bg-gray-200 rounded-full w-full">
                  <UserCircleIcon className="h-12 w-12 text-gray-600" />
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-gray-500">@{username}</div>
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-6 bottom-20 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        type="button"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-gray-700 text-lg"
                        )}
                      >
                        <LogoutIcon className="h-6 w-6 inline mr-2" /> Log out @
                        {username}
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        )}
      </Disclosure>
    </nav>
  );
};

export { Navbar };
