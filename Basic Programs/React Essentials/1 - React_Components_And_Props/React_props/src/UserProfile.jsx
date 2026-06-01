// export const UserProfile = () => {
//     return (
//         <h1>Learning React...</h1>
//         <p>Student : Devendra</p>
//     )
// }

import React from "react";

// Can't return multiple elements as JSX does not allow that. So we need to write in below way.
// We need to wrap it in a parent element

// export const UserProfile = () => {
//   return (
//     <div>
//       <h1>Learning React...</h1>
//       <p>Student : Devendra</p>
//     </div>
//   );
// };

// Everytime div tag would be visible, so we can use React.Fragment Or we can also use <></>

export const UserProfile = () => {
  return (
    <>
      <h1>Learning React...</h1>
      <p>Student : Devendra</p>
    </>
  );
};
