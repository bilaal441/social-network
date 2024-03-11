import React from "react";
import {ListGroup, Badge} from "react-bootstrap";

function Groups({groups, userGroups}) {
  // Dummy user groups data (replace with actual user groups data)
  // Assume userGroups is an array of group IDs the user is a member of
  const userGroupIds = userGroups.map((group) => group.id);

  return (
    <div>
      <h2>Groups</h2>
      <ListGroup>
        {groups.map((group) => (
          <ListGroup.Item key={group.id}>
            {group.name}
            {userGroupIds.includes(group.id) ? (
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
