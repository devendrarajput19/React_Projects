import styles from "./Alert.module.css";

// export const Alert = ({ children, type = "success" }) => {
//   return <div className="alert">{children}</div>;
// };

// export const Alert = ({ children, type = "success" }) => {
//   return <div className={`alert ${type}`}>{children}</div>;
// };

// Above way we can use class of alert and type both. This is the way to write. External css file

export const Alert = ({ children, type = "success" }) => {
  return <div className={`${styles.alert} ${styles[type]}`}>{children}</div>;
};

// Above way we write for Css modules file. was css file are globally access. So We add css modules structure
// [] are used for styles, as type is a dynamic value.
