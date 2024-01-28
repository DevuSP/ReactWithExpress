import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // used to navigate to other pages or url.

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/login", {email, password});  // server being used to recieve info.
            console.log(`Response: ${response.data}`);  // either use response.data to not get [object objet] or console.log(response) nothing else.
            if(response.data === "Success"){
                navigate("/home");  // navigate to login page as soon as above is done.
            }
        } catch (error) {
            console.log(`Error: ${error}.`);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleClick}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            className="form-control rounded-0" 
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>
                                Password
                            </strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            className="form-control rounded-0" 
                            autoComplete="off"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Sign In
                    </button>
                </form>
                <p>Already Have an Account</p>
                <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Register
                </Link>

            </div>
        </div>
    );
}

export default Login;