import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <img className="w-full" src="/logo.png" alt="" />{" "}
        </Link>
    );
};

export default Logo;
