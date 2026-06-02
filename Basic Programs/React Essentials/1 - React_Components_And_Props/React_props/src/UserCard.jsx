// import { UserInfo } from "./UserInfo";

// export const UserCard = ({ name, age, city, email }) => {
//   return (
//     <div>
//       <h2>User Details</h2>
//       <UserInfo name={name} age={age} city={city} email={email}></UserInfo>
//     </div>
//   );
// };

// Above code, we are repeating the props again, if there more than 10 props, than it wold be very clumsy code
// So we are using it in below way

// import { UserInfo } from "./UserInfo";

// export const UserCard = (props) => {
//   return (
//     <div>
//       <h2>User Details</h2>
//       <UserInfo {...props}></UserInfo>
//     </div>
//   );
// };

// This will forward all the props of UserInfo to UserCard. If there are any extra props then you can write in below way

import { UserInfo } from "./UserInfo";

export const UserCard = (id, ...rest) => {
  return (
    <div>
      <h2>User {id} Details</h2>
      <UserInfo {...rest}></UserInfo>
    </div>
  );
};
