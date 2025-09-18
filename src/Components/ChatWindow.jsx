import React from "react";

const ChatWindow = ({ activeChat }) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b font-bold text-lg bg-white shadow">
        {activeChat.name}
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {activeChat.messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="px-3 py-2 bg-blue-100 rounded-lg inline-block">
              {msg}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
