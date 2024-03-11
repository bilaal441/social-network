import Chat from "./Chat";
import {ListGroup} from "react-bootstrap";
export default function Chats() {
  const chatList = [
    {
      vatar: "user1.jpg",
      nickname: "John Doe",
      lastMessage: "Hello, how are you?",
      timeSent: "10:30 AM",
    {
      avatar: "user2.jpg",
      nickname: "Jane Smith",
      lastMessage: "I'm good, thanks!",
      timeSent: "11:45 AM",
    },
  ];

  return (
    <ListGroup>
      {chatList.map((chat, index) => (
        <Chat
          key={index}
          avatar={chat.avatar}
          username={chat.nickname}
          message={chat.lastMessage}
          timeSent={chat.timeSent}
        />
      ))}
    </ListGroup>
  );
}
