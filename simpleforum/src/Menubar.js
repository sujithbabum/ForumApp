import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AppState } from "./AppContext";

const Menubar = ({ isLoginPage }) => {
    if (isLoginPage == undefined)
        isLoginPage = false;

    const navigate = useNavigate();
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const { userName } = AppState();

    const checkUserLoggedIn = () => {
        if (userName == null || userName == undefined || isLoginPage) {
            setUserLoggedIn(false);
            return;
        }
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        fetch("/userRoutes/isLoggedIn", {
            method: "GET",
            headers: myHeaders,
        })
            .then((response) => {
                if (response.status === 200)
                    setUserLoggedIn(true);
                else setUserLoggedIn(false);
            })
            .catch(setUserLoggedIn(false));
    };
    const handleLogout = () => {
        console.log("logged in " + userLoggedIn);
        if (userLoggedIn) {
            setUserLoggedIn(false);
            navigate("/");
        }
    };

    useEffect(checkUserLoggedIn, []);
    return (
        <div className="container">
            <nav className="menubar">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <h4 id="pageTitle">Home</h4>
                </Link>
                <Link
                    to={`/${isLoginPage && !userLoggedIn
                        ? "Register"
                        : !userLoggedIn
                            ? "Login"
                            : "/"
                        }`}
                >
                    <button onClick={handleLogout} id="login-btn">
                        {isLoginPage && !userLoggedIn
                            ? "Register"
                            : !userLoggedIn
                                ? "Login"
                                : "Logout"}
                    </button>
                </Link>
            </nav>
        </div>
    );
};

export default Menubar;