// ProfileCard.js

import {Card, Form, Button} from "react-bootstrap";
import RoundImage from "./RoundedImg";
import classes from "./ProfileCard.module.css";
import Action from "./Action";
import {Link} from "react-router-dom";

const GroupCard = ({
  ,
  toggleAction,
  toggleProfileVisibility,
  owner,
  isPrivate,
  isFollowed,
  numberOfFollowers,
  numberOfFollowing,
  numberOfPosts,
}) => {
  return (
    <Card className={classes.card}>
      <div className={classes.profileContainer}>
        <Card.Body>
          <div className={classes.image}>
            {/* {.avatar && (
              <RoundImage
                src={.avatar}
                alt="Profile Picture"
                size={"100px"}
              />
            )} */}

            <ul className={`${classes["profile-action"]}   `}>
              <Action
                numberAction={numberOfPosts}
                actionName={"Posts"}
                toggleAction={toggleAction}
              />

              <Action
                numberAction={numberOfFollowers}
                actionName={"members"}
                toggleAction={toggleAction}
              />

              <Action
                numberAction={numberOfFollowing}
                actionName={"Events"}
                toggleAction={toggleAction}
              />
            </ul>
          </div>
          <Card.Title>
            <span>{}</span>
          </Card.Title>
          {.nickname && <Card.Text>Nickname: {.nickname}</Card.Text>}

          {!owner && (
            <div className={classes.interact}>
              <Button>{isFollowed ? "Ufellow" : "Fellow"}</Button>

              <Link to={`/chats/${.id}`}>
                <Button> message </Button>
              </Link>
            </div>
          )}
        </Card.Body>
      </div>
    </Card>
  );
};

export default GroupCard;
