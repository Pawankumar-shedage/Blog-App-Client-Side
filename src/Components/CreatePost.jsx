import { Base } from "./Base";

export const CreatePost = () => {
  const centerDiv = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  };
  return (
    <>
      <Base>
        <div className="container" style={{ width: "50vw" }}>
          <br />
          <h1 className="text-center">Create Post</h1>
          <div className=" mb-3">
            <label className="form-label">
              <span className="fw-semibold">Title</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Title of the blog"
            />
          </div>
          <div className=" mb-3">
            <label className="form-label">
              <span className="fw-semibold">Slug</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Copy the title with no space and a hyphen in between"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <span className="fw-semibold">Content</span>
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter content here..."
            ></textarea>
          </div>

          <div style={centerDiv}>
            <button className="btn me-5" id="myButton">
              Edit
            </button>

            <button className="btn" id="myButton">
              Publish
            </button>
          </div>
        </div>
      </Base>
    </>
  );
};
