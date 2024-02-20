import React from "react";
import {ListGroup, Badge} from "react-bootstrap";

function Groups({groups}) {
  return (
    <div>
      <ListGroup>
        {groups.map((group) => (
          <ListGroup.Item key={group.id}>
            {group.name}
            <Badge variant="success" className="ml-2">
              Member
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Groups;
