// ProfileCard.js

import {Card, Button} from "react-bootstrap";
import classes from "./ProfileCard.module.css";
import Action from "./Action";

const GroupCard = ({
  group,
  toggleAction,
  toggleProfileVisibility,
  owner,
  isPrivate,
  isFollowed,
  numberOfMembers,
  numberOfEvents,
  numberOfPosts,
}) => {
  return (
    <Card className={classes.card}>
      <div className={classes.profileContainer}>
        <Card.Body>
          <div className={classes.image}>
            <ul className={`${classes["profile-action"]}   `}>
              <Action
                numberAction={numberOfPosts}
                actionName={"Posts"}
                toggleAction={toggleAction}
              />

              <Action
                numberAction={numberOfMembers}
                actionName={"members"}
                toggleAction={toggleAction}
              />

              <Action
                numberAction={numberOfEvents}
                actionName={"Events"}
                toggleAction={toggleAction}
              />
            </ul>
          </div>
          <Card.Title>
            <span>{group.title}</span>
          </Card.Title>
          <Card.Text>group.description</Card.Text>
          <div className={classes.interact}>
            <Button>invite</Button>
            {owner && <Button>manage</Button>}
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default GroupCard;
