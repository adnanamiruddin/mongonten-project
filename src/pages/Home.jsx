import { useNavigate } from "react-router-dom";

const Home = ({ token }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Halo dek {token.user.user_metadata.name}</h1>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Home;
