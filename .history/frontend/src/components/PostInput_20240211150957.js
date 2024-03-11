import React from "react";
import {Container, InputGroup, FormControl, Button} from "react-bootstrap";

export defunction PostInput({src}) {
  return (
    <Container>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <img
              src={`http://localhost:8000/images/${src}`}
              alt="Profile"
              style={{width: "30px", height: "30px", borderRadius: "50%"}}
            />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="What's on your mind?"
          aria-label="Post input"
        />
        <InputGroup.Append>
          <Button variant="primary">Post</Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
}


