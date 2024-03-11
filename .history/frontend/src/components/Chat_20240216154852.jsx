import React from "react";
import {ListGroup} from "react-bootstrap";
import moment from "moment";
import User from "./User";

export default function Chats({avatar, username, message, timeSent, isOnline}) {
  const formattedTime = moment(timeSent).calendar(null, {
    sameDay: "h:mm A",
    lastWeek: "dddd",
    sameElse: "MM/DD/YYYY",
  });

  return (
    <ListGroup.Item>
      <div style={{padding: "1rem"}}>
        <User avatar={avatar} userName={username} isOnline={isOnline} />
      </div>

      <div className="d-flex justify-content-between gap-4 ">
        <span style={{color: "#6e6e6e"}}>{message}</span>
        <span style={{color: "#6e6e6e", fontSize} }>{formattedTime}</span>
      </div>
    </ListGroup.Item>
  );
}
