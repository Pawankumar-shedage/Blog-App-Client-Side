/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Base } from "../Components/Base";
import { ErrorToast } from "../Components/Errors/ErrorToast";
import { doLogin } from "../Auth";

export const Login = () => {
  // Styles
  const centerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    // Create a user object with username and password
    const user = {
      username,
      password,
    };

    console.log("login info", user);
    try {
      // Send a POST request to your login endpoint
      const responseToken = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (responseToken.ok) {
        console.log("Login responseToken, JWT TOKEN", responseToken);

        //saving data to local storage
        doLogin(responseToken, () => {
          console.log("LOGIN details saved in local storage.");

          // Login successful, navigate to a protected route
          navigate("/");
        });
      } else if (responseToken.status == 401 || responseToken.status == 404) {
        setError("Invalid username or password");
        setShowError(true);

        console.log("Local storage: ", localStorage);
      } else {
        // Handle login error
        console.log("Something went wrong");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Login error:", error);
    }
  };

  //RESET Fields
  const resetFields = () => {
    setUsername("");
    setPassword("");
  };

  // ERRORS
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleCloseError = () => {
    setShowError(false);
  };

  // --------------------------------RETURN STATEMENT------------------------------------------
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
              <div>
                <button type="submit" className="btn text-center" id="myButton">
                  Submit
                </button>
                &nbsp;
                <button
                  onClick={resetFields}
                  className="btn text-center myButton"
                >
                  Reset
                </button>
              </div>
              <br />
              <p>OR</p>
              <p>
                Create an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <ErrorToast
              show={showError}
              onClose={handleCloseError}
              message={error}
            ></ErrorToast>
          </form>
        </div>
      </Base>
    </>
  );
};
