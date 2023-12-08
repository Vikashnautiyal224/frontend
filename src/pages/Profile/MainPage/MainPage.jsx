import React, { useEffect, useState } from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LockResetIcon from "@mui/icons-material/LockReset";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { useLoggedInUser } from "../../../hooks/useLoggedInUser";
import { Post } from "../../Feed/Post/Post";
import axios from "axios";
import { EditProfile } from "../EditProfile/EditProfile";

export const MainPage = ({ user }) => {
  const navigate = useNavigate();
  const [loggedInUser] = useLoggedInUser();
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/userPost?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [posts]);
  const username = user?.email?.split("@")[0];
  const handleUploadCoverImage = (e) => {
    setIsLoading(true);
    const image = e.target.files[0];
    const formData = new FormData();
    formData.set("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=2ba325d405de03e5c9a4c1f3b594b213",
        formData
      )
      .then((res) => {
        const url = res.data.data.display_url;
       const userCoverImage = {
        email:user?.email,
        coverImage:url
       }
        setIsLoading(false);
        if (url) {
         axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, userCoverImage )
        //  axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, userCoverImage)
        }
      });
  };
  const handleUploadProfileImage = (e) => {
     setIsLoading(true);
    const image = e.target.files[0];
    const formData = new FormData();
    formData.set("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=2ba325d405de03e5c9a4c1f3b594b213",
        formData
      )
      .then((res) => {
        const url = res.data.data.display_url;
       const userProfileImage = {
        email:user?.email,
        profileImage:url
       }
        setIsLoading(false);
        if (url) {
         axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, userProfileImage )
        //  axios.patch(`http://localhost:5000/userUpdates/${user?.email}`, userCoverImage)
        }
      });
  
  };
  return (
    <div>
      <ArrowBackIcon className="arrow_icon" onClick={() => navigate("/")} />
      <h4 className="heading-4">@{username}</h4>
      <div className="mainProfile">
        <div className="profile-bio">
          {
            <div>
              <div className="coverImageContainer">
                <img
                  src={
                    loggedInUser[0]?.coverImage
                      ? loggedInUser[0]?.coverImage
                      : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  }
                  alt=""
                  className="coverImage"
                />

                <div className="hoverCoverImage">
                  <label htmlFor="image" className="imageIcon">
                    {isLoading ? (
                      <LockResetIcon className="photoIcon photoIconDisabled" />
                    ) : (
                      <CenterFocusWeakIcon className="photoIcon" />
                    )}
                  </label>
                  <div className="imageIcon_tweetButton">
                    <input
                      type="file"
                      id="image"
                      className="imageInput"
                      onChange={handleUploadCoverImage}
                    />
                  </div>
                </div>
              </div>
              <div className="avatar-img">
                <div className="avatarContainer">
                  <img
                    src={
                      loggedInUser[0]?.profileImage
                        ? loggedInUser[0]?.profileImage
                        : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    }
                    alt=""
                    className="avatar"
                  />

                  <div className="hoverAvatarImage">
                    <div className="imageIcon_tweetButton">
                      <label htmlFor="profileImage" className="imageIcon">
                        {isLoading ? (
                          <LockResetIcon className="photoIcon photoIconDisabled" />
                        ) : (
                          <CenterFocusWeakIcon className="photoIcon" />
                        )}
                      </label>
                      <div className="imageIcon_tweetButton">
                        <input
                          type="file"
                          id="profileImage"
                          className="imageInput"
                          onChange={handleUploadProfileImage}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="userInfo">
                  <div>
                    <h3 className="heading-3">
                      {loggedInUser[0]?.name
                        ? loggedInUser[0]?.name
                        : user && user?.displayName}
                    </h3>
                    <p className="usernameSection">@{username}</p>
                  </div>
                  <EditProfile/>
                  </div>
                  <div className="infoContainer">
                    {loggedInUser[0]?.bio ? loggedInUser[0]?.bio : ""}
                    <div className="locationAndLink">
                      {loggedInUser[0]?.location ? (
                        <p className="subInfo">
                          <MyLocationIcon /> {loggedInUser[0].location}
                        </p>
                      ) : (
                        ""
                      )}
                      {loggedInUser[0]?.website ? (
                        <p className="subInfo link">
                          <AddLinkIcon /> {loggedInUser[0].website}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <h4 className="tweetsText">Tweets</h4>
                 
                  <hr />
                </div>
                {posts.map((p) => (
                  <Post p={p} />
                ))}
              </div>
          
          }
        </div>
      </div>
    </div>
  );
};