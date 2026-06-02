export const UserDetails = ({ name, isOnline, hideOffline }) => {
  if (!isOnline && hideOffline) {
    return null;
  }

  if (isOnline) {
    return (
      <div>
        <h3>{name}</h3>
        <span>Online...</span>
        <p>Available for Chat</p>
        <button>Send Message...</button>
      </div>
    );
  }

  return (
    <div>
      <h3>{name}</h3>
      <span>Offline...</span>
      <p>Not Available</p>
      <button>Do not send Message...</button>
    </div>
  );
};

// Above code is if condition rendering.
