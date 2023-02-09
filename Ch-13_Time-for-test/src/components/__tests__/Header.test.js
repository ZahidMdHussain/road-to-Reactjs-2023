import Header from "../Header"
import {render} from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"

test("Logo should load on rendring header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>);

        // Test Header Logo
    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Cart item on intial load should be zero", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>);
        
        // Test Cart item count
    const cart = header.getAllByTestId("cart");
    expect(cart[0].innerHTML).toBe("0");
});