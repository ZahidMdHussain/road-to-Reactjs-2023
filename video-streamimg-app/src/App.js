import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import SerachContainer from "./components/SerachContainer";
import VideosContainer from "./components/VideosContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Main />
        </>
      ),
      children: [
        {
          path: "/",
          element: <VideosContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "search",
          element: <SerachContainer />,
        },
      ],
    },
  ]);
  return (
    <>
      <Provider store={store}>
        {/* <Header /> */}
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
