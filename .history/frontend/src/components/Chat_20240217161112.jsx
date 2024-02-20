import React, {useState} from "react";
import {Form, Button, ListGroup} from "react-bootstrap";
import User from "./User";

const ChatComponent = ({isOnline}) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <div>
        <User isOnline={}  />
      </div>

      <ListGroup>
        {messages.map((message, index) => (
          <ListGroup.Item key={index}>{message}</ListGroup.Item>
        ))}
      </ListGroup>

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
    </div>
  );
};
