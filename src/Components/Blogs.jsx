/* eslint-disable react/prop-types */
import {
  faComment as faSolidComment,
  faThumbsDown as faSolidThumbsDown,
  faThumbsUp as faSolidThumbsUp,
  faShareSquare as faSolidShareSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faThumbsDown,
  faThumbsUp,
  faComment,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

/* eslint-disable no-unused-vars */
export const Blogs = () => {
  //inline style css
  const centerDiv = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  };

  const [likeBtn, setIslike] = useState(false);
  const [dislikeBtn, setIsDislike] = useState(false);
  const [commentBtn, setIsComment] = useState(false);
  const [shareBtn, setIsShare] = useState(false);

  return (
    <div className="container ps-3" style={{ marginBottom: "60px" }}>
      <div className="row justify-content-center">
        <div className="card col-12 mb-3 ">
          {/* Single blog post */}
          <div className="card-body blogs">
            <h5 className="card-title">
              <span>01</span> Blog Title
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              assumenda placeat architecto ducimus. Magni quidem aperiam
              possimus temporibus illo aliquam.
            </p>

            {/* like,dislike,comment, share button */}
            <div className="blog-action" style={centerDiv}>
              <div className="blog-btns">
                <button
                  className="btn"
                  onClick={() => {
                    setIslike(!likeBtn);
                    setIsDislike(false);
                  }}
                >
                  <FontAwesomeIcon
                    icon={likeBtn ? faSolidThumbsUp : faThumbsUp}
                  />
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setIsDislike(!dislikeBtn);
                    setIslike(false);
                  }}
                >
                  <FontAwesomeIcon
                    icon={dislikeBtn ? faSolidThumbsDown : faThumbsDown}
                  />
                </button>
                <button
                  className="btn"
                  onClick={() => setIsComment(!commentBtn)}
                >
                  <FontAwesomeIcon
                    icon={commentBtn ? faSolidComment : faComment}
                  />
                </button>
                <button className="btn" onClick={() => setIsShare(!shareBtn)}>
                  <FontAwesomeIcon
                    icon={shareBtn ? faSolidShareSquare : faShareSquare}
                  />
                </button>
              </div>

              <a
                href="/"
                className="readMore btn btn-secondary rounded-pill fw-regular"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
