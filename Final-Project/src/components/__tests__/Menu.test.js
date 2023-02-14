import SelectResturant from "../SelectResturant";
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
import { menuData } from "../../mocks/data";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(menuData);
    },
  });
});

test("Add food item to cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <SelectResturant />
        <Cart />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addbtn");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("2");

  const cartBox = body.getByTestId("cartBox");
  expect(cartBox.children.length).toBe(2);
});
