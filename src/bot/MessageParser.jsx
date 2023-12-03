import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // Trim leading and trailing whitespace
    const trimmedMessage = message.trim();

    // Check if the trimmed message is empty
    if (!trimmedMessage) {
      return; // Do nothing if the message is empty
    }

    if (trimmedMessage.includes("hello")) {
      actions.handleHello();
    } else if (trimmedMessage.includes("hi")) {
      actions.handleHello();
    } else if (trimmedMessage.includes("yo")) {
      actions.handleHello();
    } else if (trimmedMessage.includes("what ")) {
      actions.handleHello();
    } else {
      actions.handleHello();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
