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
    avatar: user.profileImg,
    nickname: "JD",
    aboutMe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et tristique libero.",
  };

  return (
    <div>
      <ProfileCard user={dummyUser} />
    </div>
  );
};

export default Profile;
