import { ActionButton } from "./ActionButton";

export const Contact = () => {
  const handleSendMessage = () => {
    alert("Sending Message");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <ActionButton text="Send Message" onClick={handleSendMessage} />
    </div>
  );
};

// We are passing text from Contact (Parent) to ActionButton.jsx (child)
