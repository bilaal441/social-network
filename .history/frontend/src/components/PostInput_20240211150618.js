import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import profileImage from "../"; // Import your small rounded image

function PostInput() {
  return (
    <Container>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <img
              src={profileImage}
              alt="Profile"
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="What's on your mind?" aria-label="Post input" />
        <InputGroup.Append>
          <Button variant="primary">Post</Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
}

export default PostInput;
