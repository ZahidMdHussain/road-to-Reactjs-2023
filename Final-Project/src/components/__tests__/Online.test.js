import Main from "../Main";
import "@testing-library/jest-dom";
import {
  fireEvent,
  getByTestId,
  render,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { restaurantData } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(restaurantData);
    },
  });
});

test("Test Shimmer features on HomePage", () => {
  //Load Body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </StaticRouter>
  );
  // shimmer ui loading
  const shimmer = body.getByTestId("shimmer-ui");
  expect(shimmer.children.length).toBe(4);
});

test("Test Restuarants card visible", async () => {
  //Load Body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </StaticRouter>
  );
  // Restrucard on homePage
  await waitFor(() => expect(body.getByTestId("resturantLists")));

  const getAllRestru = body.getByTestId("resturantLists");
  expect(getAllRestru.children.length).toBe(15);
});

test("Test Search features on Home page", async () => {
  //Load Body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </StaticRouter>
  );
  // search input functionality
  await waitFor(() => expect(body.getByTestId("checkSearch")));

  const searchText = body.getByTestId("searchInput");
  fireEvent.change(searchText, {
    target: {
      value: "food",
    },
  });

  const searchbtn = body.getByTestId("checkSearch");
  fireEvent.click(searchbtn);

  const totalResturantCard = body.getByTestId("resturantLists");
  expect(totalResturantCard.children.length).toBe(3);
});

///tested working

// test("Test Online/Offline features", async () => {
//     //Load Body
//     const body = render(
//       <StaticRouter>
//         <Provider store={store}>
//           <Main />
//         </Provider>
//       </StaticRouter>
//     );
//     // Is online testing
//     await waitFor(() => expect(body.getByTestId("checkOnline")));

//     const online = body.getByTestId("checkOnline");
//     expect(online.innerHTML).toBe("🔴It seems your internet connection lost...");
//   });
