export const Categories = () => {
  const centerDiv = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
  };
  return (
    <>
      <div className="container" style={{ marginBottom: "60px" }}>
        <h1 className="text-center">Discover more of what matters to you</h1>
        <br />
        <div className="row">
          <div className="text-center container" style={centerDiv}>
            <p
              className="btn  fw-regular rounded-pill"
              // onClick={}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              All
            </p>
            <p
              className="btn  fw-regular rounded-pill"
              // onClick={}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              Tech
            </p>
            <p
              className="btn  fw-regular rounded-pill"
              // onClick={}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              Sports
            </p>
            <p
              className="btn  fw-regular rounded-pill"
              // onClick={}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              Food
            </p>
            <p
              className="btn  fw-regular rounded-pill"
              // onClick={}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                paddingLeft: "2%",
                paddingRight: "2%",
              }}
            >
              Travel
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
