import "./Alert.css";

// export const Alert = ({ children, type = "success" }) => {
//   return <div className="alert">{children}</div>;
// };

export const Alert = ({ children, type = "success" }) => {
  return <div className={`alert ${type}`}>{children}</div>;
};

// Above way we can use class of alert and type both. This is the way to write.
