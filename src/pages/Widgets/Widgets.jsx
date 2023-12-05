import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";
export const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets_widgetsContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1557187138352861186"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="imVkohli"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
};
