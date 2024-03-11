import {Button} from "react-bootstrap";
import User from "./User";
const PrivateProfile = (, fellowUserHandler}) => {
  return (
    <div
      style={{
        marginTop: "6rem",
        textAlign: "center",
      }}
    >
      <p>}'s profile is Private . Please Fellow.</p>
      <div style={{display: "flex", gap: "3rem"}}>
        <User userName=} isLoggedIn={true} />
        <Button onClick={fellowUserHandler}>Follow</Button>
      </div>
    </div>
  );
};

export default PrivateProfile;
