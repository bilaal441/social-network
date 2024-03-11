import React from "react";
import {ListGroup, Badge} from "react-bootstrap";

function Groups({groups}) {
  return (
    <div>
      <ListGroup>
        {groups.map((group) => (
          <ListGroup.Item key={group.id}>
            <div className="d-flex justify-content-between ">
              <div>
                <h5>{group.title}</h5>
                <p>{group.description}</p>
              </div>
              <Badge variant="secondary">{group.status}</Badge>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Groups;
