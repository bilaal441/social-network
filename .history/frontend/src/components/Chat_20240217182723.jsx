import React, {useState} from "react";
import {Form, Button, ListGroup} from "react-bootstrap";
import User from "./User";
import MyModal from "./Modal";
import InfiniteScroll from "react-infinite-scroll-component";

const ChatComponent = ({user, handleClose, handleShow, show}) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  const fetchMoreMessages = () => {};
  return (
    <MyModal
      handleClose={handleClose}
      handleShow={handleShow}
      show={show}
      flag={true}
    >
      <div>
        {
          user.type === "user" ? <User
          isOnline={user.isOnline}
          userName={user.userName}
          avatar={user.avatar}
        /> : <div> </div>

        }
        
      </div>

      <InfiniteScroll
        dataLength={10}
        next={fetchMoreMessages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        height={400}
        endMessage={
          <p style={{textAlign: "center"}}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ListGroup>
          {messages.map((message, index) => (
            <ListGroup.Item key={index}>{message}</ListGroup.Item>
          ))}
        </ListGroup>
      </InfiniteScroll>

      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Type your message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Form>
    </MyModal>
  );
};

export default ChatComponent;
