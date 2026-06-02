export const CandidateProfile = () => {
  const name = "Peter Parker";
  const role = "Web Developer";
  const experience = 5;
  const isAvailable = true;

  return (
    <>
      <h2>{name}</h2>
      <p>
        {role} with {experience} years of experience
      </p>
      <p>Status: {isAvailable ? "Available for hire" : "Not Available..."}</p>
    </>
  );
};

// Way to writing JSX.
