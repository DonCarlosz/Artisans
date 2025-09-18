import React from "react";

const Sidebar = ({ chats, activeChat, setActiveChat }) => {
  return (
    <div className="w-1/4 bg-white shadow-lg flex flex-col">
      <div className="p-4 font-bold text-lg border-b">Messages</div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
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
  );
};

export default Sidebar;
