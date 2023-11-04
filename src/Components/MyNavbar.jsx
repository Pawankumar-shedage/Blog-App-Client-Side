import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

export const MyNavbar = () => {
  const navigate = useNavigate();

  const handleUserProfile = () => {
    navigate("/dashboard/userProfile");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#FFC017" }}
        // style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div className="container">
          <Link className="navbar-brand me-5  pe-5 fw-bold fs-2" to="#">
            Get Hooked
          </Link>

          <button
            className="navbar-toggler fw-semibold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link  fw-semibold"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/login">
                  Login
                </Link>
              </li>

              <form className="d-flex" role="search">
                <input
                  className="form-control  fw-light "
                  style={{ borderRadius: "100px" }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                &nbsp;&nbsp;
              </form>
              <br />
              <button
                className="btn  fw-regular"
                onClick={handleUserProfile}
                id="myButton"
              >
                <FontAwesomeIcon icon={faUser} className="text-start" />
              </button>
              {/* <button
                className=" handleUserProfileButton"
                onClick={handleUserProfile}
              ></button> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
