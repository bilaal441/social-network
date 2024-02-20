import React from "react";
import {ListGroup, Badge} from "react-bootstrap";

function Groups({groups, userGroups}) {
  return (
    <div>
      <h2>Groups</h2>
      <ListGroup>
        {groups.map((group) => (
          <ListGroup.Item key={group.id}>
            {group.name}
            
              <Badge variant="success" className="ml-2">
                Member
              </Badge>
            ) : (
              <Badge variant="secondary" className="ml-2">
                Not a Member
              </Badge>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Groups;
