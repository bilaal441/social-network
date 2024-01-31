// ProfileCard.js
import React from "react";
import {Card} from "react-bootstrap";

const ProfileCard = ({user}) => {
  return (
    <Card>
      {/* {user.avatar && (
        <Card.Img
          variant="buttom"
          src={`http://localhost:8000/images/${user.avatar}`}
        />
      )} */}
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
