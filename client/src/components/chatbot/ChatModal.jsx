/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../utils/Request";
import { FaRobot } from "react-icons/fa";

function ChatBox() {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const admin = sessionStorage.getItem("admin");
  const [aiResponse, setAiResponse] = useState("");
  const [topic, setTopic] = useState("");
  const [prompt, setPrompt] = useState("");
  const [showTopics, setShowTopics] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShowTopics(true);
    }, 6000); // 4-second delay

    return () => clearTimeout(delayTimer);
  }, []); // Run once on component mount

  const topics = [
    {
      key: "internship",
      label: "Intership",
    },
    {
      key: "training",
      label: "Vocational Training",
    },
    {
      key: "marks",
      label: "Grades System",
    },
    {
      key: "credit",
      label: "Credit Transfer",
    },
    {
      key: "manners",
      label: "General Manners",
    },
  ];
  const { token } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await api.post(`/bot/newChat`, {
          topic: topic,
          prompt: prompt,
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data);
        setAiResponse(`AI: ${response.data.answer}`);
        addBotMessage(`AI: ${response.data.answer}`);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
        setFinished(false);
      }
    };

    if (finished) {
      fetchData();
    }
  }, [finished]);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
    // setChatMessages([]);
    addBotMessageWithDelay("AI: Hello! How can I help you?", 1000);
    addBotMessageWithDelay(
      "AI: Please choose a topic to start your conversation.",
      2000
    );
  };

  const addBotMessageWithDelay = (message, delay) => {
    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { message, isUser: false },
      ]);
    }, delay);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      setChatMessages([...chatMessages, { message: userInput, isUser: true }]);
      //respondToUser(userInput);
      setUserInput("");
      setFinished(true);
    }
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
    setPrompt(event.target.value);
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

  const handleTopicSelection = (selectedTopic) => {
    setTopic(selectedTopic);
    setTimeout(() => {
      setShowTopics(false);
    }, 500);
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
        Chat with Ai Bot
      </button>
      <div
        id="chat-container"
        className={`fixed bottom-16 right-4 w-96 ${
          isChatboxOpen ? "" : "hidden"
        }`}
      >
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full z-100">
          <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Ai Bot</p>
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
                  className={`bg-${msg.isUser ? "blue" : "gray-300"}-500 text-${
                    msg.isUser ? "white font-semibold" : "gray-700"
                  } rounded-lg py-2 px-4 inline-block`}
                >
                  {msg.message}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="mb-2 text-left">
                <p className="text-gray-700 py-2 px-4">Typing...</p>
              </div>
            )}
            {isChatboxOpen && showTopics && (
              <div className="mb-2 text-left">
                {topics.map((topic) => (
                  <button
                    key={topic.key}
                    className="bg-blue-500 text-white rounded-lg py-2 px-4 ml-2 mt-2 inline-block"
                    onClick={() => handleTopicSelection(topic.key)}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            )}
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
              disabled={isLoading || !topic}
            />
            <button
              disabled={!topic || isLoading}
              id="send-button"
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition disabled:bg-gray-600 duration-300"
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
