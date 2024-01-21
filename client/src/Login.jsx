import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>
                Login
            </h1>
        <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">SignUp Page</Link>

        </div>
    )
}

export default Login;