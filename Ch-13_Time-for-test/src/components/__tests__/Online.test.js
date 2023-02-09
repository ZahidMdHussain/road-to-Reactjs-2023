import Main from "../Main"
import {render} from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"
test ("Test Online/Offline features", () => {
    //Load Body
    const body = render(
        <Main />
    )
});