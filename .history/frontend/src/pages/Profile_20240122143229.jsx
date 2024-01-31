// YourComponent.js
import React from "react";
import ProfileCard from "../components/ProfileCard";
import AuthContext from "../store/authContext";
const Profile = () => {
  const {user} = React.useContext(AuthContext);
  const dummyUser = {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    avatar: "../images/PHOTO-2024-01-17-18-04-31.jpg",
    nickname: "JD",
    aboutMe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et tristique libero.",
  };

  return (
    <div>
      <h1>Your React App</h1>
      <ProfileCard user={dummyUser} />
    </div>
  );
};

export default Profile;
