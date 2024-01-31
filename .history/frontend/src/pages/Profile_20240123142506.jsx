// YourComponent.js
import React from "react";
import ProfileCard from "../components/ProfileCard";
import AuthContext from "../store/authContext";
import {Container} from "react-bootstrap";
const Profile = () => {
  const {user} = React.useContext(AuthContext);
  const dummyUser = {
    user.relStatus
    isOwner: true,
    private: true,
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
      <ProfileCard user={dummyUser} />
    </Container>
  );
};

export default Profile;
