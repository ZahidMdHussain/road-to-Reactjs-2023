import { createContext } from "react";

const userContext = createContext({
  login: {
    username: "",
    email: "",
  },
});

export default userContext;
