export const CustomButton = () => {
  const handleClick = () => {
    alert("Thanks for liking...");
  };

  return <button onClick={handleClick}>Like</button>;
};

// Event Handling Starting - Click Event.
// Every event handler receives its first object as a parameter.
// Contains useful information about the event itself.
