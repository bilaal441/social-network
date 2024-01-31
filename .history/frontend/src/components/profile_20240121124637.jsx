// Profile.js
import React, {useContext} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import AuthContext from "../store/authContext";
const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <Container>
      <Row>
        <Col>
          <h2>{user.name}'s Profile</h2>
          <p>Email: {user.email}</p>
          <h3>Activity</h3>
         
          <h3>Posts</h3>
          {/* {posts.map((post) => (
            <div key={post.id}>
              <p>{post.content}</p>
              
            </div>
          ))} */}
        </Col>

        <Col>
        
          <h3>Followers</h3>
          {/* Display followers list */}

          <h3>Following</h3>

          <Button>
            {/* {user.isPrivate ? "Make Profile Public" : "Make Profile Private"} */}
            Make Profile Private
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
