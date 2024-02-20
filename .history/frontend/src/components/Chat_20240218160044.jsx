import React, {useContext, useState, useRef, useEffect} from "react";
import {Form, Button, ListGroup} from "react-bootstrap";
import User from "./User";
import MyModal from "./Modal";
import InfiniteScroll from "react-infinite-scroll-component";
import AuthContext from "../store/authContext";
import moment from "moment";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const endMessageRef = useRef(null);
  const {
    OpenChat: handleShow,
    closeChat: handleClose,
    showChat: show,
    openChatDetails: user,
  } = useContext(AuthContext);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      setMessages([...messages, {id: 1, text: newMessage, time: new Date()}]);
      setNewMessage("");
    }
  };

  // useEffect(() => {
  //   endMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
  //   return () => {
  //     if (show === false) {
  //       setMessages([]);
  //     }
  //   };
  // }, [messages, show]);

  const helperTimeFormater = (time) => {
    return moment(time).calendar(null, {
      sameDay: "h:mm A",
      lastWeek: "dddd",
      sameElse: "MM/DD/YYYY",
    });
  };

  const fetchMoreMessages = () => {
    // Fetch more messages here
  };

  return (
    <MyModal
      handleClose={handleClose}
      handleShow={handleShow}
      show={show}
      flag={false}
    >
      <div style={{margin: "1rem 0 2rem 0"}}>
        {user?.type === "user" ? (
          <User
            isOnline={user?.isOnline}
            userName={user?.username}
            avatar={user?.avatar}
          />
        ) : (
          <div> {user?.userName}</div>
        )}
      </div>
      <div
        id="scrollableDiv"
        style={{
          height: 300,
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <InfiniteScroll
          dataLength={messages.length}
          next={fetchMoreMessages}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          style={{display: "flex", flexDirection: "column-reverse"}} //To put endMessage and loader to the top.
          inverse={true} // inverse the direction
          height={400}
          scrollableTarget="scrollableDiv"
          endMessage={
            <p style={{textAlign: "center"}}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <ListGroup className="d-flex flex-column gap-4">
            {messages.map((message, index) => (
              <>
                <span style={{textAlign: "center", color: "#898888"}}>
                  {helperTimeFormater(message.time)}
                </span>
                <ListGroup.Item key={index}>
                  <p style={{margin: "0"}}>{message.text}</p>
                </ListGroup.Item>
              </>
            ))}
            <div ref={endMessageRef} />
          </ListGroup>
        </InfiniteScroll>
      </div>
      <Form onSubmit={handleSendMessage}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type your message"
            value={newMessage}
            style={{margin: "2rem 0"}}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </MyModal>
  );
};

export default ChatComponent;
