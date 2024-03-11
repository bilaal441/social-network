import React from "react";
import {ListGroup, Image} from "react-bootstrap";
import moment from "moment";

export default function Chats({username, message, timeSent}) {
  const formattedTime = moment(timeSent).format("h:mm A");

  return (
    <ListGroup>
      <ListGroup.Item>
        <Image src="profile-pic.jpg" roundedCircle />
        <span>{username}</span>
        <span>{message}</span>
        <span>{formattedTime}</span>
      </ListGroup.Item>
    </ListGroup>
  );
}