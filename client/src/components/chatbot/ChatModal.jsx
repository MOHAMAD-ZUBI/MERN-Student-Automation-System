/* eslint-disable no-unused-vars */
import { useState } from "react";

function ChatBox() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      setChatMessages([...chatMessages, { message: userInput, isUser: true }]);
      respondToUser(userInput);
      setUserInput("");
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const addUserMessage = (message) => {
    setChatMessages([...chatMessages, { message, isUser: true }]);
  };

  const addBotMessage = (message) => {
    setChatMessages([...chatMessages, { message, isUser: false }]);
  };

  const respondToUser = (userMessage) => {
    // Replace this with your chatbot logic
    setTimeout(() => {
      addBotMessage("This is a response from the chatbot.");
    }, 500);
  };

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 z-100">
      <button
        id="open-chat"
        className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center ${
          isChatboxOpen ? "hidden" : ""
        }`}
        onClick={toggleChatbox}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        Chat with Admin Bot
      </button>
      <div
        id="chat-container"
        className={`fixed bottom-16 right-4 w-96 ${
          isChatboxOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full z-100">
          <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Admin Bot</p>
            <button
              id="close-chat"
              className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              onClick={toggleChatbox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div id="chatbox" className="p-4 h-80 overflow-y-auto">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.isUser ? "text-right" : ""}`}
              >
                <p
                  className={`bg-${msg.isUser ? "blue" : "gray"}-500 text-${
                    msg.isUser ? "white" : "gray-700"
                  } rounded-lg py-2 px-4 inline-block`}
                >
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex">
            <input
              id="user-input"
              type="text"
              placeholder="Type a message"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={userInput}
              onChange={handleUserInput}
              onKeyUp={handleKeyUp}
            />
            <button
              id="send-button"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
