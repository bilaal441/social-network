import React from "react";
import {Image} from "react-bootstrap";

function User({name, isLoggedIn}) {
  return (
    <div style={{position: "relative", display: "inline-block"}}>
      <Image
        src="https://via.placeholder.com/50"
        roundedCircle
        style={{marginRight: "10px"}}
      />
      {isLoggedIn && (
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor: "green",
            borderRadius: "50%",
            bottom: "0",
            right: "0",
            border: "2px solid white",
          }}
        />
      )}
      <div>
        <div>{name}</div>
      </div>
    </div>
  );
}

export default User;
