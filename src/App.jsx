import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CreatePost } from "./Components/CreatePost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/createPost" element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
