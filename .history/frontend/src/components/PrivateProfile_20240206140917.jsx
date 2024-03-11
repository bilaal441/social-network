import {Button} from "react-bootstrap";
import User from "./User";
const PrivateProfile = ({name, userName}) => {
  return (
    <div
      style={{
        marginTop: "6rem",
        textAlign: "center",
        display: "flex",
        gap: "3rem",
      }}
    >

      <h1>
        
      </h1>
      <User userName={userName} isLoggedIn={true} name={name} />
      <Button>Follow</Button>
    </div>
  );
};

export default PrivateProfile;
