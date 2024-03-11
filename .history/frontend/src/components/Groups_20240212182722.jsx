import React from "react";
import {ListGroup, Badge} from "react-bootstrap";

function Groups({groups}) {
  return (
    <div>
      <ListGroup>
        {groups.map((group, index) => (
          <ListGroup.Item key={group.id}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                gap: "3rem",
                
              }}
            >
              <div>
                <h5>{group.title}</h5>
                <p>{group.description}</p>
              </div>
              <Badge
                variant={group.status === "member" ? "primary" : "secondary"}
              >
                {group.status}
              </Badge>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Groups;
