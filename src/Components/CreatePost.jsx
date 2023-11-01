import { useState } from "react";
import { Base } from "./Base";

export const CreatePost = () => {
  // Posting blog-post

  const [postData, setPostData] = useState({
    title: "",
    slug: "",
    content: "",
    category_id: "1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });

    console.log(postData.category_id);
  };

  const handlePublishPost = async (e) => {
    e.preventDefault();
    console.log(e.target.value);

    try {
      const response = await fetch("http://localhost:8080/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        console.error("Failed to post data");
      } else {
        console.log("Data sent successfully ", response);
      }
    } catch (error) {
      console.log("An error occurred while posting data:", error);
    }
  };

  const centerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  };
  return (
    <>
      <Base>
        <div className="container createPost" style={{ width: "50vw" }}>
          <br />
          <h1 className="text-center">Create Post</h1>
          <form onSubmit={handlePublishPost}>
            <div className=" mb-3">
              <label className="form-label">
                <span className="fw-semibold">Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={postData.title}
                onChange={handleInputChange}
                className="form-control"
                id="title"
                placeholder="Title of the blog"
              />
            </div>
            <div className=" mb-3">
              <label className="form-label">
                <span className="fw-semibold">Slug</span>
              </label>
              <input
                type="text"
                name="slug"
                value={postData.slug}
                onChange={handleInputChange}
                className="form-control"
                id="slug"
                placeholder="Copy the title with no space and a hyphen in between"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                <span className="fw-semibold">Content</span>
              </label>
              <textarea
                className="form-control"
                name="content"
                value={postData.content}
                onChange={handleInputChange}
                id="content"
                rows="3"
                placeholder="Enter content here..."
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <span className="fw-semibold">Category ID</span>
              </label>
              <input
                type="number"
                name="category_id"
                value={postData.category_id}
                onChange={handleInputChange}
                className="form-control"
                id="category"
                placeholder="Enter category Id"
              />
            </div>

            <div style={centerDiv}>
              <button className="btn me-5" id="myButton">
                Edit
              </button>

              <button className="btn" id="myButton">
                Publish
              </button>
            </div>
          </form>
        </div>
      </Base>
    </>
  );
};
