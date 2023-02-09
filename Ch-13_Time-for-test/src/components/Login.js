import { useContext } from "react";
import userContext from "../utils/LoginContext";

const Login = () => {

    const {login, setlogin} = useContext(userContext)
    return (
        <>
            <div>
                <input onChange={(e) => {
                    setlogin({
                        username :e.target.value,})
                }} className="" type="text" name="login" placeholder="Username"/>
            </div>
        </>
    )
}

export default Login;