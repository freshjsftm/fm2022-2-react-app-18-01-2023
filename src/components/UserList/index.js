import React, { Component } from "react";
import UserCard from "../UserCard";

const dbUsers = [
  {
    id: 3,
    firstName: "Brad",
    lastName: "Pitt",
  },
  {
    id: 4,
    firstName: "Tom",
    lastName: "Rot",
  },
  {
    id: 1,
    firstName: "Jim",
    lastName: "Carry",
  },
  {
    id: 2,
    firstName: "Rob",
    lastName: "Qwerty",
  },
  {
    id: 5,
    firstName: "Leo",
    lastName: "Kaprio",
  },
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbUsers.map((user) => ({ ...user, isSelected: false })),
    };
  }
  userSelect = (id) => {
    const { users } = this.state;
    this.setState({
      users: users.map((user) => ({
        ...user,
        isSelected: user.id === id ? !user.isSelected : user.isSelected,
      })),
    });
  };
  mapUsers = (user) => <UserCard key={user.id} user={user} userSelect={this.userSelect}/>;
  render() {
    const { users } = this.state;
    return (
      <section>
        <h2>Users list</h2>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UserList;
