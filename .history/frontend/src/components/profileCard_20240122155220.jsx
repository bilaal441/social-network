// ProfileCard.js
import React from "react";
import {Card} from "react-bootstrap";
import RoundImage from "./RoundedImg";
const ProfileCard = ({user}) => {
  return (
    <Card style={{maxWidth: "18rem"}}>
      {user.avatar && (
        <RoundImage
          image={`http://localhost:8000/images/${user. avatar}`}
          alt="Profile Picture"
        />
      )}
      <Card.Body>
        <Card.Title>{`${user.firstName} ${user.lastName}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Date of Birth: {user.dateOfBirth}
        </Card.Subtitle>
        {user.nickname && <Card.Text>Nickname: {user.nickname}</Card.Text>}
        {user.aboutMe && <Card.Text>About Me: {user.aboutMe}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
