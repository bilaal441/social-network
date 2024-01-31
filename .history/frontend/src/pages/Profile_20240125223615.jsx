// YourComponent.js
import React, {useState} from "react";
import ProfileCard from "../components/ProfileCard";
import AuthContext from "../store/authContext";
import {Container} from "react-bootstrap";
import Action from "../components/Action";
const Profile = () => {
  const {user} = React.useContext(AuthContext);
  const [Isprivate, setIsPrivate] = useState(true);
  const [isActive, setIsActive] = useState("posts")

   const  toggleAction = (active, e)=>{
      setIsActive(active)
   }

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
      <div className="profile">
        <ProfileCard user={dummyUser} />
        <div>
          <ul>
            <Action numberAction={user.posts}   actionName={"Posts"} toggleAction={toggleAction} active={isActive} />
            <Action numberAction={user.followers}   actionName={"F"} toggleAction={toggleAction} active={isActive} />
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
