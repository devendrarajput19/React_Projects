export const ActionButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

// There's no effect on Button, same component is used as main logic is handle by parent.
