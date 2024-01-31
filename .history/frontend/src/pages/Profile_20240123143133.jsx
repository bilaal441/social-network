// YourComponent.js
import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import AuthContext from "../store/authContext";
import {Container} from "react-bootstrap";
const Profile = () => {
  const {user} = React.useContext(AuthContext);
  const {Isprivate, setIsPrivate} = useState(true)
  const toggleProfileVisibility = () => {
     
    setIsPrivate(Isprivate)
  };

  const dummyUser = {
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
      <ProfileCard user={dummyUser} />
    </Container>
  );
};

export default Profile;
