// ProfileCard.js
import React from "react";
import {Card, Form, Button} from "react-bootstrap";
import RoundImage from "./RoundedImg";
import classes from "./ProfileCard.module.css";
import  
const ProfileCard = ({user}) => {
  return (
    <Card className={classes.card}>
      <div className={classes.profileContainer}>
        <div>
          <ul className={classes["profile-action"]}>
            <Action
              numberAction={dummyUser.posts}
              actionName={"Posts"}
              toggleAction={toggleAction}
              active={isActive}
            />
            <Action
              numberAction={dummyUser.followers}
              actionName={"Followers"}
              toggleAction={toggleAction}
              active={isActive}
            />
            <Action
              numberAction={dummyUser.following}
              actionName={"Following"}
              toggleAction={toggleAction}
              active={isActive}
            />
          </ul>
        </div>
        {user.isOwner ? (
          <Form>
            <Form.Check
              type="switch"
              id="profileVisibilitySwitch"
              label={`Make Profile ${user.IsPrivate ? "Public" : "Private"}`}
              checked={user.IsPrivate}
              onChange={user.toggleProfileVisibility}
            />
          </Form>
        ) : (
          <div>
            <Button>{user.relStatus}</Button>
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
