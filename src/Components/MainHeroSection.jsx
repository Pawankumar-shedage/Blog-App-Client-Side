import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export const MainHeroSection = () => {
  const mainContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textWrap: "no-wrap",
    flexDirection: "column",
    backgroundColor: "#FFC017",
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#FFC017"; // Set background color for the entire page
    return () => {
      document.body.style.backgroundColor = ""; // Reset background color when component unmounts
    };
  }, []);

  // Create post
  const navigate = useNavigate();
  const handleCreatePost = () => {
    navigate("/createPost");
  };

  return (
    <>
      <div className="container" style={mainContainer}>
        <h1 className="text-center beInspired">
          <span className="beInspired">Be Inspired</span>
        </h1>
        <br />
        <h3 className="text-center tagline">
          Discover stories, thinking, and expertise from writers on any topic.
        </h3>
        <br />
        <br />
        <div>
          <button className="btn text-center" id="myButton">
            Start Reading
          </button>{" "}
          &nbsp;
          <button
            className="btn text-center"
            onClick={handleCreatePost}
            id="myButton"
          >
            <FontAwesomeIcon icon={faPencil} /> &nbsp; Create Post
          </button>
        </div>
      </div>
    </>
  );
};
