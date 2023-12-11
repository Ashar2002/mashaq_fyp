import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const trimmedMessage = message.trim().toLowerCase();

    if (trimmedMessage.includes("track order")) {
      actions.redirectToOrderTracking();
    } else if (trimmedMessage.includes("payment method")) {
      actions.redirectToPaymentMethods();
    } else if (trimmedMessage.includes("international shipping")) {
      actions.redirectToInternationalShipping();
    } else if (trimmedMessage.includes("return an item")) {
      actions.redirectToReturnsInfo();
    } else {
      // Handle other cases or provide a default response
      actions.handleDefault();
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
