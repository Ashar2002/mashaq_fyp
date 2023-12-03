import ActionProvider from "@/bot/ActionProvider";
import MessageParser from "@/bot/MessageParser";
import config from "@/bot/config";
import React from "react";
import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { FaRocketchat } from "react-icons/fa";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

const ChatBot = () => {
  // State to track chat visibility
  const [chatVisible, setChatVisible] = useState(false);

  // Function to toggle chat visibility
  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  // Define the validator function to check if the message is not empty
  const validator = (message) => {
    return message.trim() !== "";
  };

  return (
    <div className="fixed bottom-12 right-5 flex flex-col-reverse items-end transition-all duration-300 ease-in-out">
      {/* Chat icon that toggles visibility */}
      <div
        className="group bg-brown-0 border-2 border-brown-0 hover:bg-bisque-0 w-fit py-2 px-5 rounded-full flex justify-center items-center select-none"
        onClick={toggleChat}
      >
        {/* <img src="chat-icon.png" alt="Chat" /> */}
        <FaRocketchat className="text-white text-2xl group-hover:text-brown-0 " />
        {/* <ChatBubbleOvalLeftEllipsisIcon className="text-white text-2xl group-hover:text-brown-0 " /> */}
        <span className="text-white text-xl pl-2 group-hover:text-brown-0 ">
          Chat
        </span>
      </div>

      {/* Render ChatBot if chatVisible is true */}
      {chatVisible && (
        <div className="mb-5">
          {/* Pass the validator function as a prop to Chatbot */}
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            validator={validator} // Pass the validator function here
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
