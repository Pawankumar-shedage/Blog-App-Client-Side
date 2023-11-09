/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Base } from "./Base";
import { loadCategories } from "../Services/Category_service";
import { getCurrentUserData } from "../Auth";

export const CreatePost = () => {
  // Posting blog-post

  const user_id = localStorage.getItem("user_id");
  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const createdAt = currentDate.toLocaleDateString("en-US", options);

  console.log(user_id, createdAt);

  const [postData, setPostData] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    category: {
      id: "",
    },
    user: {
      id: "",
    },
    createdAt: createdAt,
  });

  console.log(postData);

  const [selectedItem, setSelectedItem] = useState("");

  // ---------------CATEGORIES---------------

  const updateCategoryID = (e) => {
    setSelectedItem(e.target.value);
    console.log(e.target.value);

    setPostData((prevData) => ({
      ...prevData,
      category: {
        ...prevData.category,
        id: e.target.value,
      },
      user: {
        ...prevData.user,
        id: user_id,
      },
    }));

    console.log("POST DATA: ", postData);
  };

  const [categories, setCategory] = useState([]);
  useEffect(() => {
    loadCategories()
      .then((data) => {
        console.log(data);
        setCategory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // INPUT FIELD
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });

    // console.log(postData.category.id);
  };

  // -----------------------------PUBLISH POST---------------
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

  // ----------------RETURN STATEMENT----------------
  return (
    <>
      <Base>
        <div
          className="container mb-5 createPost"
          style={{ width: "50vw", height: "100vh" }}
        >
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

              <select
                value={selectedItem}
                className="form-select"
                onChange={(e) => updateCategoryID(e)}
              >
                <option value="Select an item">Select an item</option>
                {categories.map((item) => (
                  <option key={item.id} name="category" value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="mb-3">
              <label className="form-label">
                <span className="fw-semibold">User ID</span>
              </label>
              <select value={userId} className="form-select">
                <option value="Select an item">Select an item</option>

                <option name="category" value={userId}>
                  {userId}
                </option>
              </select>
            </div> */}

            {/* --------BTNS */}
            <div className="mb-5" style={centerDiv}>
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
