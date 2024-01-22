import React, {useContext} from "react";
import {Container, Row, Col, Image, Button} from "react-bootstrap";
import AuthContext from "../store/authContext";
const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Image
            src={`http://localhost:8080/images/${user.profileImg}`}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </Col>
        <Col md={8}>
          <h2>{user.username}</h2>
          <p>{user.bio}</p>
          <Button variant="primary">Edit Profile</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
