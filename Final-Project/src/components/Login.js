import { useContext } from "react";
import userContext from "../utils/LoginContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login, setlogin } = useContext(userContext);

  return (
    <>
      <div className="h-[60vh] flex justify-center items-center bg-slate-300">
        <form className="border border-gray-600 p-5">
          <div className="my-2">
            <input
              onChange={(e) => {
                setlogin({
                  username: e.target.value,
                });
              }}
              className=""
              type="text"
              name="name"
              placeholder="Firstname"
            />
          </div>
          <div className="my-2">
            <input className="" type="email" name="email" placeholder="Email" />
          </div>
          <div className="bg-yellow-400" type="submit">
            <Link to="/">
              <button type="submit">Submit</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
