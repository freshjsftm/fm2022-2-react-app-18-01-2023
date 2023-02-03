import React from "react";

const UsersList = (props) => {
  const { users } = this.props;
  return (
    <ol>
      {users.map((user) => (
        <li key={user.id}> {user.name}</li>
      ))}
    </ol>
  );
};

export default UsersList;
