import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { UserCircleIcon, ChatAlt2Icon } from "@heroicons/react/solid";
import {
  HomeIcon,
  HashtagIcon,
  UserIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import axios from "axios";
import { classNames } from "../util";
import type { User } from "../types";

const Navbar = () => {
  const authContext = useAuth();
  const { user, setUser } = authContext;
  const { name, username } = user;
  const navigate = useNavigate();

  const links = [
    {
      name: "Home",
      icon: <HomeIcon className="h-7 w-7" />,
      to: "/",
    },
    {
      name: "Explore",
      icon: <HashtagIcon className="h-7 w-7" />,
      to: "/explore",
    },
    {
      name: "Profile",
      icon: <UserIcon className="h-7 w-7" />,
      to: `/${user.username}`,
    },
  ];

  const handleLogout = () => {
    axios.post("/api/logout").then(() => {
      setUser({} as User);
      navigate("/");
    });
  };

  return (
    <nav
      className="inline-flex flex-col justify-between sm:w-60 h-screen sticky top-0 overflow-y-auto p-1"
      style={{ minWidth: "64px" }}
    >
      <div className="inline-flex flex-col overflow-y-auto">
        <NavLink to="/" title="Home">
          <ChatAlt2Icon className="h-14 w-14 mb-2 p-2 text-blue-500 hover:bg-blue-100 rounded-full" />
        </NavLink>
        {links.map((link, i) => (
          <NavLink
            key={i}
            className="inline-flex items-center gap-x-5 mb-3 px-4 py-2 hover:bg-gray-200 rounded-full text-xl"
            to={link.to}
          >
            {link.icon} <span className="hidden sm:inline">{link.name}</span>
          </NavLink>
        ))}
      </div>
      <Disclosure as="div">
        {({ open }) => (
          <>
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex gap-x-2 mb-3 px-3 py-2 hover:bg-gray-200 rounded-full w-full">
                  <UserCircleIcon className="h-12 w-12 text-gray-600" />
                  <div className="hidden sm:inline">
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
                <Menu.Items className="fixed md:absolute left-6 bottom-20 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        type="button"
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-gray-700 text-lg outline-none"
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

export default Navbar;
