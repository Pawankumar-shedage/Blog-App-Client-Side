/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../Components/UserProfile.css";
import { Base } from "./Base";

export const UserProfile = () => {
  // -------------------USER DETAILS
  const [user, setUser] = useState({
    username: "Binayak Purohit",
    profile_picture: "",
    userid: "1",
    email: "binayaktech@gmail.com",
    bio: "Tech enthusiast and code ninja.",
    about:
      "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
    followers: 0,
    following: 0,
    role: "ADMIN",
  });

  // users list for test.
  // {
  //   username: "Binayak Purohit",
  //   profile_picture: "",
  //   userid: "2",
  //   email: "binayaktech@gmail.com",
  //   bio: "Tech enthusiast and code ninja.",
  //   about: "",
  //   followers: 0,
  //   following: 0,
  //   role: "ADMIN",
  // },
  // {
  //   username: "Rachana G Raikar",
  //   profile_picture: "",
  //   userid: "1",
  //   email: "rachanagraikar@gmail.com",
  //   bio: "Blogger",
  //   about:
  //     "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
  //   followers: 0,
  //   following: 0,
  //   role: "ADMIN",
  // },
  // {
  //   username: "Vismaya",
  //   profile_picture: "",
  //   userid: "1",
  //   email: "rachanagraikar@gmail.com",
  //   bio: "Blogger",
  //   about:
  //     "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
  //   followers: 0,
  //   following: 0,
  //   role: "ADMIN",
  // },
  // {
  //   username: "Rakshita",
  //   profile_picture: "",
  //   userid: "1",
  //   email: "rachanagraikar@gmail.com",
  //   bio: "Blogger",
  //   about:
  //     "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
  //   followers: 0,
  //   following: 0,
  //   role: "ADMIN",
  // },
  // {
  //   username: "Rachana G Raikar",
  //   profile_picture: "",
  //   userid: "1",
  //   email: "rachanagraikar@gmail.com",
  //   bio: "Blogger",
  //   about:
  //     "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
  //   followers: 0,
  //   following: 0,
  //   role: "ADMIN",
  // },
  // {
  //   username: "Rachana G Raikar",
  //   profile_picture: "",
  //   userid: "1",
  //   email: "rachanagraikar@gmail.com",
  //   bio: "Blogger",
  //   about:
  //     "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
  //   followers: 0,
  //   following: 0,
  //   role: "ADMIN",
  // },
  // {
  //   username: "Rachana G Raikar",
  //   profile_picture: "",
  //   userid: "1",
  //   email: "rachanagraikar@gmail.com",
  //   bio: "Blogger",
  //   about:
  //     "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
  //   followers: 0,
  //   following: 0,
  //   role: "ADMIN",
  // },
  // {
  //   username: "Rachana G Raikar",
  //   profile_picture: "",
  //   userid: "1",
  //   email: "rachanagraikar@gmail.com",
  //   bio: "Blogger",
  //   about:
  //     "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
  //   followers: 0,
  //   following: 0,
  //   role: "ADMIN",
  // },
  // {
  //   username: "Rachana G Raikar",
  //   profile_picture: "",
  //   userid: "1",
  //   email: "rachanagraikar@gmail.com",
  //   bio: "Blogger",
  //   about:
  //     "Passionate blogger. I love sharing my thoughts on various topics, including technology, lifestyle, and more.",
  //   followers: 0,
  //   following: 0,
  //   role: "ADMIN",
  // },

  // fetching data from server.
  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${userId}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const user = await response.json();
      // setUser(user);
      return user;
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      throw error;
    }
  };

  // --------RETURN
  return (
    <Base>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 mb-3" key={user.userid}>
            <div className="card">
              <div className="card-body text-center">
                {/* User Image */}
                <img
                  src="../src/Images/userAvatar.png"
                  alt={user.username}
                  className="img-fluid rounded-circle mb-3 border border-info-subtle"
                  style={{ width: "150px", height: "150px" }}
                />

                {/* User Details */}
                <h2 className="card-title">{user.username}</h2>
                {/* <p className="text-muted">{user.email}</p> */}

                {/* Followers and Following */}
                <p className="card-text">
                  Followers: {user.followers} | Following: {user.following}
                </p>

                {/* User Bio */}
                <p className="card-text">{user.bio}</p>

                {/* About */}
                <p className="card-text text-start">{user.about}</p>

                {/* User Role */}
                <p className="card-text text-start">
                  <strong>Email:</strong> {user.email}
                </p>
                {/* User Role */}
                <p className="card-text text-start">
                  <strong>Role:</strong> {user.role}
                </p>

                {/* User ID */}
                {/* <p className="card-text text-start">
                  <strong>User ID:</strong> {user.userid}
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};
