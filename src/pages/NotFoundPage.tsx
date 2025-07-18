import { Link } from "react-router";

export const NotFoundPage = () => {
    return (
        <div>
            {/* <h1>404 Page not found</h1> */}
            <Link to="/">Home</Link>
        </div>
    );
}