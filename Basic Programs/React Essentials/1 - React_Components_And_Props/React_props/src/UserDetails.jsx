export const UserDetails = ({ name, isOnline, hideOffline }) => {
  if (!isOnline && hideOffline) {
    return null;
  }

  return (
    <div>
      <h3>{name}</h3>
      <span>{isOnline ? "Online..." : "Offline..."}</span>
      <p>{isOnline ? "Available for Chat..." : "Not Available"}</p>
      {isOnline ? (
        <button>Send Message</button>
      ) : (
        <small>Check back later...</small>
      )}
    </div>
  );
};

// Above code is Ternary condition rendering.
