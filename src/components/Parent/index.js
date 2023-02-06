import React from "react";
import UserCard from "../UserSection/UserCard";
import { UserContext } from "../../contexts";

const Parent = () => {
  const renderUserContext = (user) => <UserCard user={user} />;
  return (
    <section>
      <h1>Parent</h1>
      <UserContext.Consumer>{renderUserContext}</UserContext.Consumer>
    </section>
  );
};

export default Parent;
