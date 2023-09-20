import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/dashboard/Index";
import ToastNotif from "./components/ToastNotif";
import MyProfile from "./pages/dashboard/MyProfile";
import MyContent from "./pages/dashboard/MyContent";

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
    <div className="bg-white min-h-screen w-full">
      <ToastNotif />

      <Routes>
        {token ? (
          <Route path="/dashboard">
            <Route index element={<Index />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="mycontent" element={<MyContent />} />
          </Route>
        ) : (
          ""
        )}
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
