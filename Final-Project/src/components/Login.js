import { useContext } from "react";
import userContext from "../utils/LoginContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login, setlogin } = useContext(userContext);
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setlogin({
              username: e.target.value,
            });
          }}
          className=""
          type="text"
          name="login"
          placeholder="Username"
        />
      </div>
      <Link to="/">
        <button>Submit</button>
      </Link>
    </>
  );
};

export default Login;
