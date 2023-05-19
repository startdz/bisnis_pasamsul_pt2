import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/business/auth/register", {
                email,
                username,
                password,
                secondPassword,
            });
            navigate("/auth/login");
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            }
        }
    };

    return (
        <React.Fragment>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register!</h1>
                        <p className="py-6">{!message ? "Assalamualaikum" : message}</p>
                    </div>
                    <form onSubmit={Register}>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Username</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="input input-bordered"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        value={password}
                                        name="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Verify Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="verify password"
                                        className="input input-bordered"
                                        value={secondPassword}
                                        name="secondPassword"
                                        onChange={(e) => setSecondPassword(e.target.value)}
                                    />
                                    <label className="label">
                                        <Link
                                            to={"/auth/login"}
                                            className="label-text-alt link link-hover">
                                            Sign In ?
                                        </Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Register;
