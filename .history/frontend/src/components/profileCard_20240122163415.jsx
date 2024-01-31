// ProfileCard.js
import React from "react";
import {Card} from "react-bootstrap";
import RoundImage from "./RoundedImg";
const ProfileCard = ({user}) => {
  return (
    <Card>
      <div>
        {user.avatar && (
          <RoundImage src={user.avatar} alt="Profile Picture" size={"100px"} />
        )}
      </div>
      <Card.Body>
        <span>{`${user.firstName} ${user.lastName}`}</span>
        <Card.Title>Details</Card.Title>
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
