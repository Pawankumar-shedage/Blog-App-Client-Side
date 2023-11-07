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
import { useEffect, useState } from "react";

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

  // Post Data . From Server
  const [posts, setPosts] = useState([
    {
      id: "01",
      user_id: 1,
      userName: "Pawankumar Shedage",
      createdat: "12 Novembar 2023",
      title: "ChatGPT Turbo launch",
      content:
        "The field of artificial intelligence has seen remarkable advancements in recent years, and one of the latest breakthroughs is the launch of ChatGPT Turbo. This cutting-edge AI model is designed to take conversational AI to the next level. With its enhanced capabilities, ChatGPT Turbo opens up new possibilities for natural language understanding and generation. It promises to revolutionize how we interact with AI systems, making them even more useful and efficient. Stay tuned as we explore the exciting developments and potential applications of ChatGPT Turbo in the world of AI.",
    },
    {
      id: "01",
      user_id: 1,
      userName: "Pawankumar Shedage",
      createdat: "12 Novembar 2023",
      title: "ChatGPT Turbo launch",
      content:
        "The field of artificial intelligence has seen remarkable advancements in recent years, and one of the latest breakthroughs is the launch of ChatGPT Turbo. This cutting-edge AI model is designed to take conversational AI to the next level. With its enhanced capabilities, ChatGPT Turbo opens up new possibilities for natural language understanding and generation. It promises to revolutionize how we interact with AI systems, making them even more useful and efficient. Stay tuned as we explore the exciting developments and potential applications of ChatGPT Turbo in the world of AI.",
    },
    {
      id: "01",
      user_id: 1,
      userName: "Pawankumar Shedage",
      createdat: "12 Novembar 2023",
      title: "ChatGPT Turbo launch",
      content:
        "The field of artificial intelligence has seen remarkable advancements in recent years, and one of the latest breakthroughs is the launch of ChatGPT Turbo. This cutting-edge AI model is designed to take conversational AI to the next level. With its enhanced capabilities, ChatGPT Turbo opens up new possibilities for natural language understanding and generation. It promises to revolutionize how we interact with AI systems, making them even more useful and efficient. Stay tuned as we explore the exciting developments and potential applications of ChatGPT Turbo in the world of AI.",
    },
  ]);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          console.log(data);
        });
    } catch (error) {
      console.log("Error occured while fetching posts:", error);
    }
  }, []);

  // ------------------------RETRUN STATEMENT------------------
  return (
    <div className="container ps-3" style={{ marginBottom: "60px" }}>
      <div className="row justify-content-center">
        {posts.map((post) => (
          <>
            <div className="card col-12 mb-3 ">
              {/* Single blog post */}

              {/* Fetched Blog Post */}
              <div className="card-body blogs ">
                {/* mapping fetched data */}

                <div className="" key={post.id}>
                  <h5 className="card-title">
                    <span className="fs-3 fw-light">{post.id}</span> &nbsp;
                    <span className="fs-3">{post.title}</span>
                    {/* div for 'by user_name' & 'created at' */}
                    <br />
                    <div className="lh-1" style={centerDiv}>
                      <p className="fs-6 fw-light my-3">
                        <small> by {post.userName}</small>
                      </p>
                      <p className="fs-6 fw-light my-3">
                        <small>{post.createdat}</small>
                      </p>
                    </div>
                  </h5>

                  {/* POST CONTENT */}
                  <p className="card-text">{post.content}</p>
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
                    <button
                      className="btn"
                      onClick={() => setIsComment(!commentBtn)}
                    >
                      <FontAwesomeIcon
                        icon={commentBtn ? faSolidComment : faComment}
                      />
                    </button>

                    {/* Share btn */}
                    <button
                      className="btn"
                      onClick={() => setIsShare(!shareBtn)}
                    >
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
          </>
        ))}
      </div>
    </div>
  );
};
