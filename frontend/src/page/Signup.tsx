import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth";
import { ChatAlt2Icon } from "@heroicons/react/solid";

const Signup = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      username: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const name = target.name.value;
    const username = target.username.value;
    const email = target.email.value;
    const password = target.password.value;

    axios
      .post("/api/users", { username, email, password, name })
      .then(({ data }) => {
        setUser(data);
        navigate(`/`);
      })
      .catch((e) => {
        setError(true);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center px-1">
      <div className="w-96">
        <form onSubmit={handleSubmit} data-testid="form">
          <ChatAlt2Icon className="h-12 w-12 mb-10 text-blue-500 mx-auto" />
          <h1 className="block mb-10 text-2xl font-bold">
            Sign up for Twitter
          </h1>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            required
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            id="username"
            name="username"
            required
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            required
          />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            required
          />
          <button
            className="bg-black hover:bg-gray-800 text-white block rounded-full py-2 px-4 font-bold w-full"
            type="submit"
          >
            Sign up
          </button>
        </form>
        {error && <p className="text-red-500">Account registration failed.</p>}
        <p className="mt-10 mb-4">Already have an account?</p>
        <Link
          className="bg-white hover:bg-blue-50 text-blue-500 text-center border border-gray-400 rounded-full py-2 px-4 font-bold block w-full"
          to="/login"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
