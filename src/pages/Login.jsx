import { Link } from "react-router-dom";
import { Base } from "../Components/Base";

export const Login = () => {
  const centerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
          >
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            {/* <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Check me out</label>
            </div> */}
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
          </form>
        </div>
      </Base>
    </>
  );
};
