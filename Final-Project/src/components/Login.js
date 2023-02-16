import { useContext } from "react";
import userContext from "../utils/LoginContext";
import { Link } from "react-router-dom";
import login_img from "../img/login.jpg";

const Login = () => {
  const { login, setlogin } = useContext(userContext);

  return (
    <>
      <div className="min-h-[60vh] flex justify-center items-center bg-[#0e7490]">
        <div className="bg-[#f4f9fd] max-w-[60vw] grid grid-flow-col grid-cols-9">
          <div className="col-span-5 p-4 flex flex-col justify-center items-center font-fsans">
            <h2 className="text-2xl font-bold my-4 text-[#0e7490]">Log In</h2>
            <form className=" py-5 w-full text-center">
              <div className="my-4">
                <input
                  className="px-4 py-2 text-base border w-2/3 rounded-full focus:outline focus:outline-[#0e7490]"
                  onChange={(e) => {
                    setlogin({
                      username: e.target.value,
                    });
                  }}
                  type="text"
                  name="name"
                  placeholder="Firstname"
                />
              </div>
              <div className="my-4">
                <input
                  className="px-4 py-2 text-base border w-2/3 rounded-full focus:outline focus:outline-[#0e7490]"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div
                className="outline-none border-transparent focus:border-transparent focus:ring-0"
                type="submit"
              >
                <Link
                  className="border-transparent focus:border-transparent focus:ring-0"
                  to="/"
                >
                  <button
                    className="px-4 py-2 text-lg border-0 w-2/3 rounded-full bg-[#0e7490] text-white outline-0 focus:outline border-transparent focus:border-transparent focus:ring-0 hover:bg-[#105467]"
                    type="submit"
                  >
                    LogIn
                  </button>
                </Link>
              </div>
              <p className="mt-7 text-xs font-thin text-slate-400">
                Don't have an account?{" "}
                <span className="text-[#0e7490]">Register</span>
              </p>
            </form>
          </div>
          <div className="bg-[#ffffff] col-span-4 flex items-center">
            <img src={login_img} alt="login_banner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
