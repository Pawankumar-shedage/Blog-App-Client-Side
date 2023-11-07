import "../Components/UserProfile.css";
import { Base } from "./Base";

export const UserProfile = () => {
  // -------------------USER DETAILS
  const user = {
    username: "Rachana G Raikar",
    email: "rachanagraikar@gmail.com",
    bio: "Blogger",
    about:
      "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
    avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    twitter: "https://twitter.com/johndoe",
    facebook: "https://facebook.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    followers: 0,
    following: 0,
    role: "Author",
    userid: "12345",
  };

  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const userStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  };

  const avatarStyles = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: "20px",
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const h1Styles = {
    fontSize: "3rem",
    fontFamily: "sans-serif",
    margin: "0",
    color: "#333",
  };

  const tableStyles = {
    width: "100%",
    textAlign: "left",
    marginBottom: "20px",
  };

  const tableRowStyles = {
    display: "table-row",
  };

  const tableCellStyles = {
    display: "table-cell",
    padding: "5px 10px",
  };

  const labelStyles = {
    fontWeight: "bold",
  };

  const followCountStyles = {
    marginBottom: "20px",
  };

  const followLabelStyles = {
    fontWeight: "bold",
  };

  const socialStyles = {
    marginTop: "20px",
  };

  const iconStyles = {
    textDecoration: "none",
    color: "#007BFF",
    marginRight: "20px",
    fontSize: "1.5rem",
    transition: "color 0.2s",
  };

  return (
    <Base>
      <div style={containerStyles}>
        <div style={userStyles}>
          <div style={avatarStyles}>
            <img
              src={user.avatar}
              alt={`${user.username}'s avatar`}
              style={imageStyles}
            />
          </div>
          <h1 style={h1Styles}>{user.username}</h1>
          <table style={tableStyles}>
            <div style={tableRowStyles}>
              <div style={tableCellStyles}>
                <div style={labelStyles}>Email:</div>
              </div>
              <div style={tableCellStyles}>{user.email}</div>
            </div>
            <div style={tableRowStyles}>
              <div style={tableCellStyles}>
                <div style={labelStyles}>Bio:</div>
              </div>
              <div style={tableCellStyles}>{user.bio}</div>
            </div>
            <div style={tableRowStyles}>
              <div style={tableCellStyles}>
                <div style={labelStyles}>Role:</div>
              </div>
              <div style={tableCellStyles}>{user.role}</div>
            </div>
            <div style={tableRowStyles}>
              <div style={tableCellStyles}>
                <div style={labelStyles}>User ID:</div>
              </div>
              <div style={tableCellStyles}>{user.userid}</div>
            </div>
            <div style={tableRowStyles}>
              <div style={tableCellStyles}>
                <div style={labelStyles}>About:</div>
              </div>
              <div style={tableCellStyles}>{user.about}</div>
            </div>
          </table>
          <div style={followCountStyles}>
            <span style={followLabelStyles}>Followers:</span> {user.followers}
            <span style={followLabelStyles}> Following:</span> {user.following}
          </div>
          <div style={socialStyles}>
            <a
              href={user.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyles}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={user.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyles}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href={user.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyles}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </Base>
  );
};
// return (
//   <>
//     <Base>
//       <h1>UserProfile</h1>
//     </Base>
//   </>
// );
// };
