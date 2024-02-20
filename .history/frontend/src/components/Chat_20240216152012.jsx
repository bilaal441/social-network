import React from "react";
import {ListGroup} from "react-bootstrap";
import moment from "moment";
;

export default function Chats({avatar, username, message, timeSent}) {
  const formattedTime = moment(timeSent).calendar(null, {
    sameDay: "h:mm A",
    lastWeek: "dddd",
    sameElse: "MM/DD/YYYY",
  });

  return (
    <ListGroup.Item>
      <div className="d-flex w-100 gap-4 mb-3" style={{padding: "1rem"}}>
      <div style={{position: "relative", marginRight: "10px"}}>
        <Image
          src="https://via.placeholder.com/50"
          roundedCircle
          style={{marginRight: "5px"}}
        />
        { tr && (
          <div
            style={{
              position: "absolute",
              width: "15px",
              height: "15px",
              backgroundColor: "green",
              borderRadius: "50%",
              bottom: "6px",
              right: "6px",
              border: "2px solid white",
            }}
          />
        )}
      </div>


        <span style={{fontSize: "1rem"}} className="fw-bold ">
          {username}
        </span>
      </div>

      <div className="d-flex justify-content-between gap-4 ">
        <span style={{color: "#6d6c6c"}}>{message}</span>
        <span>{formattedTime}</span>
      </div>
    </ListGroup.Item>
  );
}
