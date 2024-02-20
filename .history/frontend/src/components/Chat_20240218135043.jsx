import React, {useContext, useState, useEffect, useRef} from "react";
import {Form, Button, ListGroup} from "react-bootstrap";
import User from "./User";
import MyModal from "./Modal";
import InfiniteScroll from "react-infinite-scroll-component";
import AuthContext from "../store/authContext";
import moment from "moment";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

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

  const helperTimeFormater = (time) => {
    return moment(time).calendar(null, {
      sameDay: "h:mm A",
      lastWeek: "dddd",
      sameElse: "MM/DD/YYYY",
    });
  };

  const fetchMoreMessages = () => {};

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});

    
  }, [messages]);

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

      <InfiniteScroll
        dataLength={10}
        next={fetchMoreMessages}
        hasMore={false}
        loader={<h4>Loading...</h4>}
        height={400}
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
          <div ref={messagesEndRef} />
        </ListGroup>
      </InfiniteScroll>

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
