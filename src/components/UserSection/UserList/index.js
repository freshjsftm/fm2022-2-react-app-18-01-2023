import React, { Component } from "react";
import UserCard from "../UserCard";

class UserList extends Component {
  mapUsers = (user) => (
    <UserCard key={user.id} user={user} userSelect={this.props.userSelect} />
  );
  render() {
    const { users } = this.props;
    return (
      <section>
        <h2>Users list</h2>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UserList;
