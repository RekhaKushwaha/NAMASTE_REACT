import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    //console.log(err);
    return (
        <div>
            <h1>OOPS...</h1>
            <h2>Something went wrong. Please check again</h2>
            <h2>{ err.status + " " + err.statusText + " " + err.error}</h2>
        </div>
    )
}

export default Error;