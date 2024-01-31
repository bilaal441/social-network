import React from "react";
import {Image} from "react-bootstrap";

function User({name, isLoggedIn}) {
  return (
    <div>
      <Image
        src="https://via.placeholder.com/50"
        roundedCircle
        style={{marginRight: "10px", position: "relative"}}
      />
      {isLoggedIn && (
        <div
          style={{
            position: "absolute",
            width: "15px",
            height: "15px",
            backgroundColor: "green",
            borderRadius: "50%",
            bottom: "-2px",
            right: "-2px",
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
