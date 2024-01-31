import React from "react";
import {Container, Col, Image, Button} from "react-bootstrap";

const ProfileCard = (props) => {
  return (
    <Container className="mt-5">
      <Col md={4}>
        <div>
          <Image
            src={`http://localhost:8000/images/${user.profileImg}`}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
        </div>
      </Col>
      <Col md={8}>
        <h3> {.username}</h3>
        <p>{user.bio}</p>
        <Button variant="primary">Edit Profile</Button>
      </Col>
    </Container>
  );
};

export default ProfileCard;
