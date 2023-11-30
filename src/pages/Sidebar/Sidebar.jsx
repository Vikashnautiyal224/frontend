import React, { useState } from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SidebarOptions from "./SidebarOptions";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DoneIcon from "@mui/icons-material/Done";
import ListAltIcon from "@mui/icons-material/ListAlt";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
// import ListItemIcon from '@mui/icons-material/ListItemIcon ';
export const Sidebar = ({handleLogout,user }) => {
  const [anchorE1, setAnchorE1] = useState(null);

  const openMenu = Boolean(anchorE1);

  const handleClick = (e) => {
    setAnchorE1(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twitterIcon" />
      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions active Icon={SearchIcon} text="Explore" />
      <SidebarOptions active Icon={NotificationsIcon} text="Notifications" />
      <SidebarOptions active Icon={MailOutlineIcon} text="Messages" />
      <SidebarOptions active Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOptions active Icon={ListAltIcon} text="Lists" />
      <SidebarOptions active Icon={PermIdentityIcon} text="Profile" />
      <SidebarOptions active Icon={MoreIcon} text="More" />

      <Button variant="outlined" className="sidebar_tweet">
        Tweet
      </Button>
      <div className="Profile_info">
        <Avatar src="https:/cdn.pixabay.com/photo/2016/08/08/09/1/avatar-1577909_960_720.png" />
        <div className="user_info">
          <h4>Vikash Nautiyal</h4>
          <h5>@vikash</h5>
        </div>
        <IconButton
          size="small"
          sx={{ ml: 2 }}
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="basic-item"
          anchorE1={anchorE1}
          open={openMenu}
          onClick={handleClose}
          onClose={handleClose}
        >
          <MenuItem className="Profile_info">
            <Avatar src="https:/cdn.pixabay.com/photo/2016/08/08/09/1/avatar-1577909_960_720.png" />
            <div className="user_info subUser_info">
              <div>
                <h4>Vikash Nautiyal</h4>
                <h5>@vikash</h5>
              </div>
              <ListItemIcon className="done_icon">
                <DoneIcon />
              </ListItemIcon>
            </div>
          </MenuItem>
          <Divider/>
          <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
          <MenuItem onClick={handleLogout}>Log out @vikash</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
