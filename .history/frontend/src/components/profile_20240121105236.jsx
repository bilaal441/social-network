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
          {/* Display User Information */}
          <h2>{user.name}'s Profile</h2>
          <p>Email: {user.email}</p>
          {/* Add more user information fields as needed */}

          {/* Display User Activity */}
          <h3>Activity</h3>
          {/* Display user activity data */}

          {/* Display User Posts */}
          <h3>Posts</h3>
          {/* {posts.map((post) => (
            <div key={post.id}>
              <p>{post.content}</p>
              
            </div>
          ))} */}
        </Col>

        <Col>
          {/* Display Followers and Following */}
          <h3>Followers</h3>
          {/* Display followers list */}

          <h3>Following</h3>
          {/* Display following list */}

          {/* Toggle Privacy Button (only visible for own profile) */}

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
