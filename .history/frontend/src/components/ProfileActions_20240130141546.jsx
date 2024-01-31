import {useState} from "react";
import classes from "./Profile.module.css";
import Action from "./Action";
const ProfileActions = ({user}) => {
  const [isActive, setIsActive] = useState("Posts");
  const toggleAction = (active) => {
    setIsActive(active);
  };
<MyModal handleClose={handleClose} handleShow={handleShow} show={show}>

  
</MyModal>
  return (
    <ul className={classes["profile-action"]}>
      <Action
        numberAction={user.followers}
        actionName={"Followers"}
        toggleAction={toggleAction}
        active={isActive}
      />
      <Action
        numberAction={user.fellowing}
        actionName={"Following"}
        toggleAction={toggleAction}
        active={isActive}
      />
    </ul>
  );
};

export default ProfileActions;
