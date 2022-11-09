import React, { useState } from "react";
import Menubar from "./Menubar";
import { AppState } from "./AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (name, password) => {
        let seen = [];
        const requestContent = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    name: name,
                    password: password,
                },
                (key, val) => {
                    if (val != null && typeof val == "object") {
                        if (seen.indexOf(val) >= 0) {
                            return;
                        }
                        seen.push(val);
                    }
                    return val;
                }
            ),
        };

        fetch("/userRoutes/login", requestContent)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setUserName(res.name);
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    const [name, setName] = useState("");
    const [password, setPasseword] = useState("");
    const { setUserName } = AppState();

    return (
        <>
            <Menubar isLoginPage={true} />
            <div className="connexion-container">
                <div className="connexion-content">
                    <h2>Please Login</h2>
                    <p>Username</p>
                    <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        placeholder="username"
                    />

                    <p>Password</p>
                    <input
                        value={password}
                        onChange={(event) => setPasseword(event.target.value)}
                        type="password"
                        placeholder="*****"
                    />
                    <button
                        className="connexion-btn"
                        onClick={() => handleLogin(name, password)}
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;
