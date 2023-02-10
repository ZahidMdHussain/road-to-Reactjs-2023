import Main from "../Main";
import { getByTestId, render } from "@testing-library/react";
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

test("Test Online/Offline features", () => {
  //Load Body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </StaticRouter>
  );
  // Is online testing
  const online = body.getByTestId("checkOnline");
  expect(online.innerHTML).toBe("");
});

test("Test Serach features on HomePage", () => {
  //Load Body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </StaticRouter>
  );
  // Is online testing
  const searchbtn = body.getByTestId("checkSearch");
  expect(searchbtn.innerHTML).toBe("Search");
});
