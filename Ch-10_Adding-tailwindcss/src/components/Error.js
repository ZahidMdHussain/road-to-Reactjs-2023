import { useRouteError } from "react-router-dom";

const Error = () => {
const err = useRouteError();
    return (
        <>
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
            <h3>{err.error.message}</h3>
        </>
    )
}

export default Error;