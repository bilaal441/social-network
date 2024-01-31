// YourComponent.js
import React, {useState} from "react";
import classes from "./Profile.module.css";
import ProfileCard from "../components/ProfileCard";
import AuthContext from "../store/authContext";
import {Container} from "react-bootstrap";
import Action from "../components/Action";
const dummyPosts = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categories: ["Category1", "Category2"],
    created_at: "2024-01-27T12:00:00Z",
    comments: 10,
    likes: 20,
    dislikes: 5,
    username: "user1",
    key: 1,
  },
  {
    id: 2,
    title: "Consectetur Adipiscing Elit",
    body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categories: ["Category3", "Category4"],
    created_at: "2024-01-26T10:30:00Z",
    comments: 15,
    likes: 25,
    dislikes: 8,
    username: "user1",
    likeHandler: () => {},
    disLikeHandler: () => {},
    key: 2,
  },
  {
    id: 3,
    title: "Sed Do Eiusmod Tempor Incididunt",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    categories: ["Category5", "Category6"],
    created_at: "2024-01-25T08:45:00Z",
    comments: 8,
    likes: 18,
    dislikes: 3,
    username: "user1",

    key: 3,
  },
  {
    id: 4,
    title: "Ut Enim Ad Minim Veniam",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    categories: ["Category7", "Category8"],
    created_at: "2024-01-24T14:20:00Z",
    comments: 12,
    likes: 22,
    dislikes: 6,
    username: "user4",
    likeHandler: () => {},
    disLikeHandler: () => {},
    key: 4,
  },
  {
    id: 5,
    title: "Quis Nostrud Exercitation Ullamco Laboris",
    body: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    categories: ["Category9", "Category10"],
    created_at: "2024-01-23T16:55:00Z",
    comments: 17,
    likes: 30,
    dislikes: 10,
    username: "user5",
    likeHandler: () => {},
    disLikeHandler: () => {},
    key: 5,
  },
  // Add more dummy posts as needed
];

const Profile = () => {
  const {user} = React.useContext(AuthContext);
  const [Isprivate, setIsPrivate] = useState(true);
  const [isActive, setIsActive] = useState("Posts");

  const toggleAction = (active) => {
    setIsActive(active);
  };

  const toggleProfileVisibility = () => {
    setIsPrivate(!Isprivate);
  };

  const dummyUser = {
    toggleProfileVisibility,
    relStatus: "fellow",
    isOwner: true,
    Isprivate: true,
    followers: 20,
    following: 35,
    posts: 23,
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    avatar: user.profileImg,
    nickname: "JD",
    aboutMe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et tristique libero.",
  };

  return (
    <Container>
      <div className={classes.profile}>
        <ProfileCard user={dummyUser} />
        <div>
          <ul className={classes["profile-action"]}>
            <Action
              numberAction={dummyUser.posts}
              actionName={"Posts"}
              toggleAction={toggleAction}
              active={isActive}
            />
            <Action
              numberAction={dummyUser.followers}
              actionName={"Followers"}
              toggleAction={toggleAction}
              active={isActive}
            />
            <Action
              numberAction={dummyUser.following}
              actionName={"Following"}
              toggleAction={toggleAction}
              active={isActive}
            />
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
