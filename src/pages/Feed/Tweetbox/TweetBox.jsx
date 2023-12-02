import { Avatar, Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import React, { useState } from "react";
import "./TweetBox.css";

export const TweetBox = () => {
  const [post, setPost] = useState("");
  const [imageURL, setImageURL] = useState(null);

  const handleTweet = (e) => {
    e.preventDefault();
     const userPost ={
      post:post,
      photo:imageURL
     }
    //  console.log(userPost)
    fetch(`http://localhost:5000/post`, {
      method: "POST",
      headers:{
       'content-type':'application/json'
      },
      body:JSON.stringify(userPost)
     
    })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
      })
  };
  

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  // };

  return (
    <div className="tweetBox">
      <form onSubmit={handleTweet}>
        <div className="tweetBox_input">
          <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
          <input
            type="text"
            placeholder="What's happening"
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <div className="imageICon_tweetButton">
          <label htmlFor="image" className="imageIcon">
            <AddPhotoAlternateIcon />
          </label>
          <input
            type="file"
            id="image"
            className="imageInput"
            // onChange={handleImageChange}
          />
          <Button className="tweetBox_tweetButton" type="submit">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};
