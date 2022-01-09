import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Feed from "./page/Feed";
import Explore from "./page/Explore";
import Splash from "./page/Splash";
import Profile from "./page/Profile";
import axios from "axios";
import { useAuth } from "./context/auth";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function App() {
  const { username } = useAuth().user;

  if (!username) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Splash />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <main className="flex justify-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/:username" element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
