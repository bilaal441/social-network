import React from "react";
import {ListGroup, Badge} from "react-bootstrap";

function Groups({groups}) {
  return (
    <div>
      <ListGroup>
        {groups.map((group) => (
          <ListGroup.Item key={group.id}>
            {group.title}
            <Badge variant="success" className="ml-2">
             groups.st
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Groups;
