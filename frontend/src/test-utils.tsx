import { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/auth";

const providerProps = {
  user: {
    _id: "61ac94978f3295684634c163",
    username: "tiffany123",
    email: "tiffany@gmail.com",
    name: "Tiffany Valencia",
    followers: ["61a833539216bd92ed9cb0be"],
    following: ["61ab6bc121cfe97b983a7567", "61a9e41bb0d8c923764b564b"],
    likedTweets: ["61ab6c2821cfe97b983a757d", "61aa01f61985ab70adee0307"],
    bio: "Accountant in Saipan",
    location: "Saipan",
    website: "",
    isAdmin: false,
    createdAt: "",
    updatedAt: "",
  },
  setUser: () => {},
};

const AllTheProviders: FC = ({ children }) => {
  return (
    <AuthContext.Provider value={providerProps}>
      <BrowserRouter>{children}</BrowserRouter>
    </AuthContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
