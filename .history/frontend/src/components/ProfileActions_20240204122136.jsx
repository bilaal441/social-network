// import classes from "./Profile.module.css";
import Action from "./Action";
import MyModal from "./Modal";
import User from "./User";
import classes from "./ProfileActions.module.css";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

const ProfileActions = ({
  user,
  handleClose,
  handleShow,
  show,
  flag,
  toggleAction,
  isActive,
}) => {
  return (
    <MyModal
      handleClose={handleClose}
      handleShow={handleShow}
      show={show}
      flag={flag}
    >
      <ul className={classes.actions}>
        <Action
          numberAction={user.followers.length}
          actionName={"followers"}
          toggleAction={toggleAction}
          active={isActive}
        />
        <Action
          numberAction={user.following.length}
          actionName={"following"}
          toggleAction={toggleAction}
          active={isActive}
        />
      </ul>
      <div>
        <ul className={classes.followers}>
          <InfiniteScroll
          dataLength={items.length}
          
          
          >
            {user[isActive]?.map((user, i) => (
              <li key={i} className={classes.item}>
                <Link to={`/profile/${user.id}`} className={classes.links}>
                  <User
                    userName={user.userName}
                    isLoggedIn={true}
                    name={user.name}
                  />
                </Link>

                <Button className={classes.itemButton}>
                  {isActive === "followers" ? "Remove" : "Fellowing"}
                </Button>
              </li>
            ))}
          </InfiniteScroll>
        </ul>
      </div>
    </MyModal>
  );
};

export default ProfileActions;
