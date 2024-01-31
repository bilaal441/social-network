import {useState} from "react";
// import classes from "./Profile.module.css";
import Action from "./Action";
import MyModal from "./Modal";
import User from "./User";
const ProfileActions = ({user, handleClose, handleShow, show}) => {
  const [isActive, setIsActive] = useState("followers");
  const toggleAction = (active) => {
    setIsActive(active);
  };

  return (
    <MyModal handleClose={handleClose} handleShow={handleShow} show={show}>
      <ul>
        {/* <Action
          numberAction={user.followers.length}
          actionName={"Followers"}
          toggleAction={toggleAction}
          active={isActive}
        />
        <Action
          numberAction={user.fellowing.length}
          actionName={"following"}
          toggleAction={toggleAction}
          active={isActive}
        /> */}
      </ul>
      <div>
        <ul>
          {/* {user[isActive].map((user, i) => (
            <li key={i}>
              <User
                userName={user.userName}
                isLoggedIn={true}
                name={user.name}
              />
            </li>
          ))} */}
        </ul>
      </div>
    </MyModal>
  );
};

export default ProfileActions;
