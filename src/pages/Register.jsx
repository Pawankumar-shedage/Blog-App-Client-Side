/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Base } from "../Components/Base";
import { ErrorToast } from "../Components/Errors/ErrorToast";
import { CreatePost } from "../Components/CreatePost";

export const Register = () => {
  //Custom style.
  const centerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const navigate = useNavigate(); // Initialize the navigate function

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(0);

  //-----------------------HANDLE REGISTER()
  const handleRegister = async (e) => {
    e.preventDefault();

    // Create a user object with username, email, and password
    const user = {
      username,
      email,
      password,
      userId,
    };

    try {
      // Send a POST request to your register endpoint
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Registration successful, navigate to the login page
        const data1 = await response.json();

        //
        setUserId(data1);
        console.log("registered successfully,USERID", data1);

        sendDataToChild(data1);
        // <CreatePost user_ID={data1}></CreatePost>;
        navigate("/login");
        //
      } else {
        // Handle registration error
        setError("Registration failed. Please check your input.");
        setShowError(true);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Registration error:", error);
    }
  };

  // ERRORS
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleCloseError = () => {
    setShowError(false);
  };

  const sendDataToChild = (data) => {
    console.log("data sent ", data);
    <CreatePost user_ID={data}></CreatePost>;
  };

  return (
    <>
      <Base>
        <br />
        <div>
          <h1 className="text-center">Register</h1>
          <form
            className="container text-start bg-white "
            style={{ width: "50vw" }}
            onSubmit={handleRegister} // Add onSubmit handler to the form
          >
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text" // Use "text" for username
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/*  */}
            {/* <CreatePost user_ID={userId}></CreatePost>; */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">
                Agree to terms and conditions
              </label>
            </div>
            <div style={centerDiv}>
              <button type="submit" className="btn text-center" id="myButton">
                Sign Up
              </button>
              <br />
              <p>OR</p>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <ErrorToast
                show={showError}
                onClose={handleCloseError}
                message={error}
              ></ErrorToast>
            </div>
          </form>
        </div>
      </Base>
    </>
  );
};
