import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/dashboard/Index";
import ToastNotif from "./components/ToastNotif";
import MyProfile from "./pages/dashboard/MyProfile";
import MyContent from "./pages/dashboard/MyContent";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Content from "./pages/DetailContent";
import CollabReq from "./pages/dashboard/CollabReq";

const App = () => {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen w-full text-black">
      <ToastNotif />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />

        <Route path="/:slug">
          <Route index element={<Profile />} />
          <Route path="content/:id" element={<Content />} />
        </Route>

        {/* ONLY AUTHENTICATED USER */}
        {token ? (
          <Route path="/dashboard">
            <Route index element={<Index />} />
            <Route path="myprofile" element={<MyProfile token={token} />} />
            <Route path="mycontents" element={<MyContent token={token} />} />
            <Route path="collabreq" element={<CollabReq token={token} />} />
          </Route>
        ) : (
          ""
        )}
      </Routes>
    </div>
  );
};

export default App;
