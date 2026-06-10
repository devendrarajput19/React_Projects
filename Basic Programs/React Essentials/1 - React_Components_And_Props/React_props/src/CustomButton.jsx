export const CustomButton = ({ text }) => {
  const name = "Devendra..";
  const handleClick = () => {
    // console.log("Clicked element", e.target);
    // console.log("Clicked coordinates", e.clientX, e.clientY);
    // console.log("Which mouse button", e.button);
    // alert("Thanks for liking...");

    console.log(`Hey ${name}, you clicked ${text}`);
  };

  return <button onClick={handleClick}>{text}</button>;
};

// Event Handling Starting - Click Event.
// Every event handler receives its first object as a parameter.
// Contains useful information about the event itself.

// Event Handlers have access to all the components variable and props as they are defined inside the component.
