import React, {useContext} from "react";
import {Container, Row, Col, Image, Button} from "react-bootstrap";
import AuthContext from "../store/authContext";
import classes from "./NavBar.module.css";
const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <Container className="mt-5">
      <Col md={4}>
        <div className={`${classes["profile-image"]}`}>
          <Image
            src={`http://localhost:8000/images/${user.profileImg}`}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </div>
      </Col>
      <Col md={8}>
        <h3> {user.username}</h3>
        <p>{user.bio}</p>
        <Button variant="primary">Edit Profile</Button>
      </Col>
    </Container>
  );
};

export default Profile;
