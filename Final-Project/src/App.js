import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Error from "./components/Error.js";
import Help from "./components/Help";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SelectResturant from "./components/SelectResturant";
import userContext from "./utils/LoginContext";
const About = lazy(() => import("./components/About"));
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  const [user, setUser] = useState({
    username: "",
    email: "md@gmail.com",
  });

  return (
    <Provider store={store}>
      <userContext.Provider value={{ login: user, setlogin: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "restaurants/:id",
        element: <SelectResturant />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
