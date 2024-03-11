// ProfileCard.js

import {Card, Form, Button} from "react-bootstrap";
import RoundImage from "./RoundedImg";
import classes from "./ProfileCard.module.css";
import Action from "./Action";
import {Link} from "react-router-dom";

const ProfileCard = ({
  user,
  toggleAction,
  toggleProfileVisibility,
  owner,
  isPrivate,
}) => {
  return (
    <Card className={classes.card}>
      <div className={classes.profileContainer}>
        {owner && (
          <Form>
            <Form.Check
              type="switch"
              id="profileVisibilitySwitch"
              label={`Make Profile ${ ? "Public" : "Private"}`}
              checked={isPrivate}
              onChange={toggleProfileVisibility}
            />
          </Form>
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

            <ul className={`${classes["profile-action"]}   `}>
              {user.numberOfPosts && (
                <Action
                  numberAction={user.numberOfPosts}
                  actionName={"Posts"}
                  toggleAction={toggleAction}
                />
              )}
              {user.numberOfFollowers && (
                <Action
                  numberAction={user.numberOfFollowers}
                  actionName={"Followers"}
                  toggleAction={toggleAction}
                />
              )}

              {user.numberOfFollowing && (
                <Action
                  numberAction={user.numberOfFollowing}
                  actionName={"Following"}
                  toggleAction={toggleAction}
                />
              )}
            </ul>
          </div>
          <Card.Title>
            <span>{`${user.firstName} ${user.lastName}`}</span>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Date of Birth: {user.age}
          </Card.Subtitle>
          {user.nickname && <Card.Text>Nickname: {user.nickname}</Card.Text>}
          {user.aboutMe && <Card.Text>About Me: {user.aboutMe}</Card.Text>}
          <div className={classes.interact}>
            {/* {!user.isOwner && ( */}
            <>
              <Button>{user.relStatus}</Button>

              <Link to={`/chats/${user.id}`}>
                <Button> message </Button>
              </Link>
            </>
            {/* )} */}
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ProfileCard;
