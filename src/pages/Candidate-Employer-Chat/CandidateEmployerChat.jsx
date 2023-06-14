import React, { useState } from "react";

const CandidateEmployerChat = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const messages = [
    {
      id: 1,
      sender: "Employer",
      content: "Hi, are you available for an interview tomorrow?",
      timestamp: "May 17, 9:30 AM",
    },
    {
      id: 2,
      sender: "Candidate",
      content: "Yes, I am available. What time works for you?",
      timestamp: "May 17, 9:35 AM",
    },
    // Add more messages here...
  ];

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/3 bg-gray-200 px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Inbox</h1>
        <ul className="space-y-2">
          {messages.map((message) => (
            <li
              key={message.id}
              className={`p-2 rounded-md cursor-pointer ${
                selectedMessage?.id === message.id ? "bg-gray-300" : ""
              }`}
              onClick={() => handleSelectMessage(message)}
            >
              <p className="font-bold">{message.sender}</p>
              <p>{message.content}</p>
              <p className="text-xs text-gray-500">{message.timestamp}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 bg-white px-4 py-6">
        {selectedMessage ? (
          <div>
            <p className="font-bold mb-2">{selectedMessage.sender}</p>
            <p>{selectedMessage.content}</p>
            <p className="text-xs text-gray-500">{selectedMessage.timestamp}</p>
          </div>
        ) : (
          <p className="text-gray-500">Select a message to view</p>
        )}
      </div>
    </div>
  );
};

export default CandidateEmployerChat;

