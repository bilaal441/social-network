import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
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
let cloure = 0;
const ChatComponent = () => {
  console.log("cloure", cloure);
  cloure++;

  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsloading] = useState(false);
  const prevScrollPosRef = useRef(0);
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
      setMessages([
        ...messages,
        {id: messages.length + 1, text: newMessage, time: new Date()},
      ]);
      endMessageRef?.current?.scrollIntoView({behavior: "smooth"});
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



  const throttleChatScrollHandler = throttle((e) => {
    const el = e.target;
    const containerHeight = el.scrollHeight;
    const scrollTop = el.scrollTop;
    const percentageScrolledUp = (scrollTop / containerHeight) * 100;
    console.log("percentageScrolledUp", percentageScrolledUp);

    // Move the initialization inside the throttle handler

    if (
      percentageScrolledUp <= 10 &&
      scrollTop < prevScrollPosRef.current?.prevScrollPos
    ) {
      fetchMoreMessages();
    }
    prevScrollPosRef.current.prevScrollPos = scrollTop;
  }, 1000);

  // useEffect(() => {
  //   endMessageRef?.current?.scrollIntoView({behavior: "smooth"});
  // }, [messages]); // Scroll to the bottom when messages change

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
        <ListGroup
          className="d-flex flex-column gap-4"
          id="scrollableDiv"
          style={{
            overflowY: "auto",
            height: "400px",
            flexDirection: "column-reverse",
          }}
          ref={prevScrollPosRef}
          onScroll={throttleChatScrollHandler}
        >
          {!hasMore && (
            <p style={{textAlign: "center"}}>
              <b>Yay! You have seen it all</b>
            </p>
          )}
          {isLoading && <h4>Loading...</h4>}
          {messages.map((message) => (
            <React.Fragment key={message.id}>
              <span style={{textAlign: "center", color: "#898888"}}>
                {helperTimeFormater(message.time)}
              </span>
              <ListGroup.Item>
                <p style={{margin: "0"}}>{message.text}</p>
              </ListGroup.Item>
            </React.Fragment>
          ))}

          <div ref={endMessageRef} />
        </ListGroup>
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
