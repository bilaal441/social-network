// YourComponent.js
import React from "react";
import ProfileCard from "./ProfileCard";

const profile = () => {
  const dummyUser = {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    avatar: "path/to/avatar.jpg",
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

export default YourComponent;
