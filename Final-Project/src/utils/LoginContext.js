import { createContext } from "react";

const userContext = createContext({
    login: {
    username: "-name",
    email: "no-email",
    }
});

export default userContext;


