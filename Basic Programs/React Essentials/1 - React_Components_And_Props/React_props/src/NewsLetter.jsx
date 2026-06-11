import { ActionButton } from "./ActionButton";

export const NewsLetter = () => {
  const handleSubscribe = () => {
    alert("Thank you for Subscribe...");
  };

  return (
    <div>
      <h2> Subscribe to NewsLetter...</h2>
      <ActionButton text="Subscribe" onClick={handleSubscribe} />
    </div>
  );
};

// We are passing text from Contact (Parent) to ActionButton.jsx (child)
