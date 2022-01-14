import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormError from "../components/FormError";
import { FaTwitter } from "react-icons/fa";

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const Signup = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    setError("");
    axios
      .post("/api/login", data)
      .then(({ data }) => {
        navigate(`/${data.username}`);
        setUser(data);
      })
      .catch(() => {
        setError("Authentication failed.");
      });
  };

  return (
    <div className="h-screen flex items-center justify-center px-1">
      <div className="w-96">
        <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
          <FaTwitter size="3rem" className="mb-10 text-blue-500 mx-auto" />
          <h1 className="block mb-10 text-2xl font-bold">Sign in to Twitter</h1>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="email"
            type="text"
            {...register("email")}
          />
          <FormError message={errors.email?.message} />
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="password"
            id="password"
            {...register("password")}
          />
          <FormError message={errors.password?.message} />
          <button
            className="bg-black hover:bg-gray-800 text-white inline-block rounded-full py-2 px-4 mt-3 font-bold w-full"
            type="submit"
          >
            Log in
          </button>
        </form>
        <FormError message={error} />
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
