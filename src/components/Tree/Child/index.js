import React from "react";
import UserCard from "../../UserSection/UserCard";
import { UserContext } from "../../../contexts";

const Child = (props) => {
  const renderFunction = (user) => <UserCard user={user} />;
  return <UserContext.Consumer>{renderFunction}</UserContext.Consumer>;
};

export default Child;
