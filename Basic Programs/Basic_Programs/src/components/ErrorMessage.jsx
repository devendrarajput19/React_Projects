const ErrorMessage = (props) => {
  return <>{props.items.length === 0 ? <h3>I am still Hungry...</h3> : null}</>;
};

export default ErrorMessage;
