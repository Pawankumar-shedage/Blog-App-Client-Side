import { Link } from "react-router-dom";
import { Base } from "../Components/Base";

export const Register = () => {
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
          <h1 className="text-center">Register</h1>
          <form
            className="container text-start bg-white "
            style={{ width: "50vw" }}
          >
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
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
                SignUp
              </button>
              <br />
              <p>OR</p>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Base>
    </>
  );
};
