import React, {useContext, useState, useEffect} from "react";
import {Form, Button, ListGroup} from "react-bootstrap";
import User from "./User";
import MyModal from "./Modal";
import AuthContext from "../store/authContext";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import {throttle} from "lodash";

const dummyMessages = Array.from({length: 10}, (_, index) => ({
  id: index + 1,
  text: "Hello, World!",
  time: new Date(),
}));

const ChatComponent = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    OpenChat: handleShow,
    closeChat: handleClose,
    showChat: show,
    openChatDetails: user,
  } = useContext(AuthContext);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        {id: messages.length + 1, text: newMessage, time: new Date()},
      ]);
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

  const fetchMoreMessages = () => {
    if (!isLoading && messages.length < 100) {
      setIsLoading(true);

      setTimeout(() => {
        const newMessages = Array.from({length: 10}, (_, index) => ({
          id: messages.length + index + 1,
          text: "Hello, earth! ",
          time: new Date(),
        }));

        setMessages((prevMessages) => [...prevMessages, ...newMessages]);
        setIsLoading(false);
      }, 500);
    } else if (!isLoading && messages.length >= 100) {
      setHasMore(false);
    }
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
      <div>
        <InfiniteScroll
          dataLength={messages.length}
          next={fetchMoreMessages}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            overflowY: "auto",
            height: "400px",
            gap: "1rem",
          }}
        >
          <ListGroup id="scrollableDiv">
            {messages.map((message, i) => (
              <React.Fragment key={message.id}>
                <div className="chats">
                  <span style={{textAlign: "center", color: "#898888"}}>
                    {helperTimeFormater(message.time)}
                  </span>
                  <ListGroup.Item action as="li">
                    <p style={{margin: "0"}}>{message.text + (i + 1)}</p>
                  </ListGroup.Item>
                </div>
              </React.Fragment>
            ))}
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
