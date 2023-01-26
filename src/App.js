import React from "react";
import "./App.css";
// import Ciao from "./components/CiaoSection/Ciao";
import UserCard from "./components/UserSection/UserCard";
import UserList from "./components/UserSection/UserList";

const username = {
  id: 1,
  firstName: "Brad",
  lastName: "Pitt",
  isSelected: false,
};
const users = [username];

function App() {
  return (
    <>
      {/* <Ciao username={username.firstName} /> */}
      <UserCard user={username} />
      <UserList users={users} />
    </>
  );
}

export default App;
