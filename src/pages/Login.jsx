import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Base } from "../Components/Base";

export const Login = () => {
  const centerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    // Create a user object with username and password
    const user = {
      username,
      password,
    };

    try {
      // Send a POST request to your login endpoint
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Login successful, navigate to a protected route
        navigate("/");
      } else {
        // Handle login error
        setError("Invalid username or password");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Base>
        <br />
        <div>
          <h1 className="text-center">Login</h1>
          <form
            className="container text-start bg-white "
            style={{ width: "50vw" }}
            onSubmit={handleLogin}
          >
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                required
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                required
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div style={centerDiv}>
              <button type="submit" className="btn text-center" id="myButton">
                Submit
              </button>
              <br />
              <p>OR</p>
              <p>
                Create an account? <Link to="/register">Register</Link>
              </p>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </Base>
    </>
  );
};
