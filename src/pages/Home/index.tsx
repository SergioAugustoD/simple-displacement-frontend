import { useLogin } from "hooks";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { handleLogOut } = useLogin();
  const navigate = useNavigate();

  const logOut = () => {
    handleLogOut();
    navigate("/login");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Home;
