import React, { useState } from "react";
import { Image as ImageIcon, Send } from "lucide-react"; // Lucide icons

const MessageSection = () => {
  // Example chat list
  const chats = [
    { id: 1, name: "Alice", messages: [{ text: "Hey!" }, { text: "How are you?" }] },
    { id: 2, name: "Bob", messages: [{ text: "Yo!" }, { text: "Ready for tomorrow?" }] },
    { id: 3, name: "Charlie", messages: [{ text: "Hello 👋" }, { text: "Let’s catch up" }] },
    { id: 4, name: "Diana", messages: [{ text: "Hi!" }, { text: "Missed our call?" }] },
  ];

  const [chatsState, setChatsState] = useState(chats);
  const [activeChat, setActiveChat] = useState(chats[0]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  // Filter chats by search
  const filteredChats = chatsState.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = () => {
    if (!message.trim() && !file) return;

    const newMessage = {
      text: message.trim() || "",
      image: file ? URL.createObjectURL(file) : null,
      fromMe: true, // mark messages we send
    };

    setChatsState((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChat.id
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      )
    );

    setActiveChat((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));

    // Reset inputs
    setMessage("");
    setFile(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg flex flex-col">
        {/* Top Header */}
        <div className="p-4 font-bold text-lg border-b">Messages</div>

        {/* Search Bar */}
        <div className="p-3 border-b">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`p-3 cursor-pointer hover:bg-gray-100 ${
                activeChat.id === chat.id ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {chat.name}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Empty Top Navbar */}
        <div className="p-4 border-b bg-white shadow h-14"></div>

        {/* Secondary Navbar (Chat Name) */}
        <div className="p-4 border-b bg-gray-50 font-semibold text-lg">
          {activeChat.name}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {activeChat.messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-3 flex ${
                msg.fromMe ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 rounded-lg max-w-xs ${
                  msg.fromMe ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {msg.text && <p>{msg.text}</p>}
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="sent"
                    className="mt-2 rounded-lg max-h-40"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t bg-white flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2"
          />

          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />

          {/* File Upload Icon */}
          <label
            htmlFor="fileInput"
            className="ml-2 cursor-pointer p-2 rounded-full hover:bg-gray-100"
          >
            <ImageIcon size={22} className="text-gray-600" />
          </label>

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-1"
          >
            <Send size={18} />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
