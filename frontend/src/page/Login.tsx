import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";
import { ChatAlt2Icon } from "@heroicons/react/solid";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    axios
      .post("/api/login", { email, password })
      .then(({ data }) => {
        navigate(`/${data.username}`);
        setUser(data);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center px-1">
      <div className="w-96">
        <form onSubmit={handleSubmit}>
          <ChatAlt2Icon className="h-12 w-12 mb-10 text-blue-500 mx-auto" />
          <h1 className="block mb-10 text-2xl font-bold">Sign in to Twitter</h1>
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
            required
          />
          <button
            className="bg-black hover:bg-gray-800 text-white block rounded-full py-2 px-4 font-bold w-full"
            type="submit"
          >
            Log in
          </button>
        </form>
        {error && <p className="text-red-500">Authentication failed.</p>}
        <p className="mt-10 mb-4">Don't have an account?</p>
        <Link
          className="bg-white hover:bg-blue-50 text-blue-500 text-center border border-gray-400 rounded-full py-2 px-4 font-bold block w-full"
          to="/signup"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Signup;