import React from "react";
import {ListGroup} from "react-bootstrap";
import moment from "moment";
import User from "./User";

export default function Chats({avatar, username, message, timeSent}) {
  const formattedTime = moment(timeSent).calendar(null, {
    sameDay: "h:mm A",
    lastWeek: "dddd",
    sameElse: "MM/DD/YYYY",
  });

  return (
    <ListGroup.Item>
      <div className="d-flex w-100 gap-4 mb-3" style={{padding: "1rem"}}>
        <
      </div>

      <div className="d-flex justify-content-between gap-4 ">
        <span style={{color: "#6d6c6c"}}>{message}</span>
        <span>{formattedTime}</span>
      </div>
    </ListGroup.Item>
  );
}
