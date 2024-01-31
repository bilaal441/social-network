import React from "react";
import {Badge, Image} from "react-bootstrap";

function User({name, isLoggedIn}) {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <div style={{position: "relative", marginRight: "10px"}}>
        <Image
          src="https://via.placeholder.com/50"
          roundedCircle
          style={{marginRight: "10px"}}
        />
        {isLoggedIn && (
          <div
            style={{
              position: "absolute",
              width: "15px",
              height: "15px",
              backgroundColor: "green",
              borderRadius: "50%",
              bottom: "0",
              right: "0",
              border: "2px solid white",
            }}
          />
        )}
      </div>
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
