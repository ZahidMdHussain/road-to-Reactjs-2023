import { useContext } from "react";
import userContext from "../utils/LoginContext";


const About = () => {

    const {login} = useContext(userContext);

    return (
        <>
            <div>
                <h1 className="text-md font-bold text-green-400">Tailwindcss</h1>
                <h1>About Us</h1>
                <h2>This is about us page which is under maintainace ⚒️</h2>
                <h2>Context variable - {login.username}</h2>
            </div>
        </>
    )
}

export default About;