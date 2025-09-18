import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

const ChatPage = () => {
  const [chats, setChats] = useState([
    { id: 1, name: "Alice", messages: ["Hey!", "How are you?"] },
    { id: 2, name: "Bob", messages: ["Yo!", "Ready for tomorrow?"] },
    { id: 3, name: "Charlie", messages: ["Hello 👋", "Let’s catch up"] },
  ]);

  const [activeChat, setActiveChat] = useState(chats[0]);

  const handleSend = (message) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChat.id
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      )
    );
    // Update activeChat to reflect the new message
    setActiveChat((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar chats={chats} activeChat={activeChat} setActiveChat={setActiveChat} />
      <div className="flex-1 flex flex-col">
        <ChatWindow activeChat={activeChat} />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatPage;
