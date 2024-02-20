import React, {useContext, useState, useRef, useEffect} from "react";
import {Form, Button, ListGroup} from "react-bootstrap";
import User from "./User";
import MyModal from "./Modal";
import InfiniteScroll from "react-infinite-scroll-component";
import AuthContext from "../store/authContext";
import moment from "moment";
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

  const helperTimeFormater = (time) => {
    return moment(time).calendar(null, {
      sameDay: "h:mm A",
      lastWeek: "dddd",
      sameElse: "MM/DD/YYYY",
    });
  };

  const fetchMoreMessages = throttle(() => {
    if (messages.length < 50) {
      setMessages((prevMessages) => [
        ...prevMessages,
        ...Array.from({length: 10}, (_, index) => ({
          id: index + index,
          text: "Hello, earth! ",
          time: new Date(),
        })),
      ]);
    } else {
      console.log("no more messages");
      setHasMore(false);
    }
  }, 5000);

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
        // id="scrollableDiv"
        style={{
          overflow: "auto",
          display: "flex",
          height: 400,
          flexDirection: "column-reverse",
        }}
      >
        <InfiniteScroll
          dataLength={50}
          next={fetchMoreMessages}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          style={{display: "flex", flexDirection: "column-reverse"}}
          inverse={true}
          height={400}
          // scrollableTarget="scrollableDiv"
          endMessage={
            <p style={{textAlign: "center"}}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          scrollToTop={false} // Disable scrolling to top when new items are loaded
        >
          <ListGroup className="d-flex flex-column gap-4">
            {messages.map((message, index) => (
              <React.Fragment key={index}>
                <span style={{textAlign: "center", color: "#898888"}}>
                  {helperTimeFormater(message.time)}
                </span>
                <ListGroup.Item>
                  <p style={{margin: "0"}}>{message.text + index}</p>
                </ListGroup.Item>
              </React.Fragment>
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
