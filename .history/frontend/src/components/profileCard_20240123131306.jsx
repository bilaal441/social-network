// ProfileCard.js
import React from "react";
import {Card, Form, Button} from "react-bootstrap";
import RoundImage from "./RoundedImg";
import classes from "./ProfileCard.module.css";
const ProfileCard = ({user}) => {
  return (
    <Card className={classes.card}>
      <div className={classes.profileContainer}>
        {user.isowner ? (
          <Form>
            <Form.Check
              type="switch"
              id="profileVisibilitySwitch"
              label={`Make Profile ${
                user.isProfilePublic ? "Public" : "Private"
              }`}
              checked={user.isProfilePublic}
              onChange={user.toggleProfileVisibility}
            />
          </Form>
        ) : (
          <div>
            <Button>fellow</Button>
          </div>
        )}
        <Card.Body>
          <div className={classes.image}>
            {user.avatar && (
              <RoundImage
                src={user.avatar}
                alt="Profile Picture"
                size={"100px"}
              />
            )}
          </div>
          <Card.Title>
            <span>{`${user.firstName} ${user.lastName}`}</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Date of Birth: {user.dateOfBirth}
          </Card.Subtitle>
          {user.nickname && <Card.Text>Nickname: {user.nickname}</Card.Text>}
          {user.aboutMe && <Card.Text>About Me: {user.aboutMe}</Card.Text>}
        </Card.Body>
      </div>
    </Card>
  );
};

export default ProfileCard;
