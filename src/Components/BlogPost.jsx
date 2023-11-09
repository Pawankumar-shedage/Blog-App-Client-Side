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
import { Link } from "react-router-dom";
import { useState } from "react";

export const BlogPost = ({ post }) => {
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

  // const initialContent = posts.post.
  const { content } = post;
  console.log(content);
  const minLengthInChars = 300;
  const initialContent = post.content.substring(0, minLengthInChars);
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMore = () => {
    setShowFullContent(!showFullContent);
  };

  //   -----------RETURN---
  return (
    <>
      <div className="card col-12 mb-3">
        <div className="card-body blogs ">
          <div className="" key={post.id}>
            <h5 className="card-title">
              {post.id < 10 ? (
                <span className="fs-3 fw-lighter text-secondary">
                  {" "}
                  0{post.id}
                </span>
              ) : (
                <span className="fs-3 fw-lighter text-secondary">
                  {" "}
                  {post.id}
                </span>
              )}
              &nbsp;
              <span className="fs-3 ">{post.title}</span>
              {/* div for 'by user_name' & 'created at' */}
              <br />
              <div className="lh-1" style={centerDiv}>
                <p className="fs-6 fw-light my-3">
                  {/* temp adding, slug instead of userName */}
                  <small>{post.slug}</small>
                </p>
                <p className="fs-6 fw-light my-3">
                  <small>{post.createtedAt}</small>
                </p>
              </div>
            </h5>

            {/* POST CONTENT */}
            <p className="card-text">
              {showFullContent ? post.content : initialContent + "  ..."}
            </p>
          </div>

          {/* like,dislike,comment, share button */}
          <div className="blog-action" style={centerDiv}>
            <div className="blog-btns">
              {/* Like Btn */}
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

              {/* Dislike Btn */}
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

              {/* Comment Btn */}
              <button className="btn" onClick={() => setIsComment(!commentBtn)}>
                <FontAwesomeIcon
                  icon={commentBtn ? faSolidComment : faComment}
                />
              </button>

              {/* Share btn */}
              <button className="btn" onClick={() => setIsShare(!shareBtn)}>
                <FontAwesomeIcon
                  icon={shareBtn ? faSolidShareSquare : faShareSquare}
                />
              </button>
            </div>

            {/* Read More btn */}
            {content.length > minLengthInChars && (
              <Link
                className="readMore btn btn-secondary rounded-pill fw-regular"
                to="/"
                onClick={handleReadMore}
              >
                {showFullContent ? "Read Less" : "Read More"}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
