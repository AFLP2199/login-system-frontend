import { Link } from "react-router-dom";
import { getCurrentUser } from "../../services/authService";

function Navbar() {
    return (
        <header className="flex flex-row items-center justify-between py-1 px-2 bg-gray-700 bg-opacity-75 text-white">
            <Link to="/" className="text-base md:text-lg m-1 font-medium">
                Login System
            </Link>
            {!getCurrentUser() && (
                <ul className="flex flex-row">
                    <li className="m-1">
                        <Link
                            className="text-base md:text-lg px-2 py-2 rounded bg-gray-800 hover:bg-gray-700 transition duration-100 ease-out"
                            to="/login"
                        >
                            Login
                        </Link>
                    </li>
                    <li className="m-1">
                        <Link
                            className="text-base md:text-lg px-2 py-2 rounded bg-gray-800 hover:bg-gray-700 transition duration-100 ease-out"
                            to="/register"
                        >
                            Register
                        </Link>
                    </li>
                </ul>
            )}
            {getCurrentUser() && (
                <ul className="flex flex-row">
                    <li className="m-1">
                        <Link
                            className="text-base md:text-lg px-2 py-2 rounded bg-gray-800 hover:bg-gray-700 transition duration-100 ease-out"
                            to="/profile"
                        >
                            {getCurrentUser().name}
                        </Link>
                    </li>
                    <li className="m-1">
                        <Link
                            className="text-base md:text-lg px-2 py-2 rounded bg-gray-800 hover:bg-gray-700 transition duration-100 ease-out"
                            to="/logout"
                        >
                            Log out
                        </Link>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Navbar;
