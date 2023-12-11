// in ActionProvider.jsx
import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you!");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const redirectToOrderTracking = () => {
    const botMessage = createChatBotMessage("You can track your order by asking on contact page.");
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const redirectToPaymentMethods = () => {
    const botMessage = createChatBotMessage("We accept various payment methods. You can find more details on our payment methods page. [Payment Methods](/payment-methods)");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const redirectToInternationalShipping = () => {
    const botMessage = createChatBotMessage("Yes, we offer international shipping. Check our shipping information page for more details. [Shipping Information](/shipping-info)");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const redirectToReturnsInfo = () => {
    const botMessage = createChatBotMessage("To return an item, please follow the instructions on our returns and exchanges page. [Returns & Exchanges](/returns-exchanges)");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDefault = () => {
    const botMessage = createChatBotMessage("I'm sorry, I didn't understand that. This info might be confidential for a user .Please contact us on 03158540707 for further query");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            redirectToOrderTracking,
            redirectToPaymentMethods,
            redirectToInternationalShipping,
            redirectToReturnsInfo,
            handleDefault,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
