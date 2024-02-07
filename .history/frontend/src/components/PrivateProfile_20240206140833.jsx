import {Button} from "react-bootstrap";

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
      <User userName={userName} isLoggedIn={true} name={name} />
      <Button>Follow</Button>
    </div>
  );
};

export default PrivateProfile;
