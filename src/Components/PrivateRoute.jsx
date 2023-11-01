import { Outlet, useNavigate } from "react-router-dom";
// import { Blogs } from "./Blogs";

export const PrivateRoute = () => {
  const navigate = useNavigate();
  let isLoggedIn = true;

  //   if (isLoggedIn) {
  //     return <Outlet />;
  //   } else {
  //     return navigate("/login");
  //   }

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     return <Outlet />;
  //   } else {
  //     alert("You must be logged in");
  //     navigate("/login");
  //   }
  // }, [isLoggedIn, navigate]);

  return isLoggedIn ? <Outlet /> : navigate("login");
};
