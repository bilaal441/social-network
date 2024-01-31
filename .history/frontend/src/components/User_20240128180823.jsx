import React from "react";
import {Badge, Image} from "react-bootstrap";

function User({name, isLoggedIn}) {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <Image
        src="https://via.placeholder.com/50"
        roundedCircle
        style={{marginRight: "10px"}}
      />
      <div>
        <div>{name}</div>
        <Badge bg={isLoggedIn ? "success" : "secondary"}>
          {isLoggedIn ? "Online" : "Offline"}
        </Badge>
      </div>
    </div>
  );
}

export default User;
