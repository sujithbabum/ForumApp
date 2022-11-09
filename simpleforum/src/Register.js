import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Menubar from "./Menubar";

const Register = () => {
    const navigate = useNavigate();

    const handleSignIn = (name, email, password) => {
        let seen = [];
        const requestContent = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                {
                    name: name,
                    email: email,
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

        fetch("/userRoutes/register", requestContent)
            .then((response) => {
                console.log(response);
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasseword] = useState("");
    const [confirmePassword, setConfirmePasseword] = useState("");
    return (
        <>
            <Menubar />
            <div className="connexion-container">
                <div className="connexion-content">
                    <h2>Please Register</h2>
                    <p>Username</p>
                    <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        placeholder="username"
                    />

                    <p>Email Address</p>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="text"
                        placeholder="email"
                    />

                    <p>Password</p>
                    <input
                        value={password}
                        onChange={(event) => setPasseword(event.target.value)}
                        type="password"
                        placeholder="*****"
                    />

                    <p>Confirm password</p>
                    <input
                        value={confirmePassword}
                        onChange={(event) => setConfirmePasseword(event.target.value)}
                        type="password"
                        placeholder="*****"
                    />

                    <button
                        className="connexion-btn"
                        onClick={() =>
                            password === confirmePassword &&
                            handleSignIn(name, email, password)
                        }
                    >
                        Register
                    </button>
                </div>
            </div>
        </>
    );
};

export default Register;
