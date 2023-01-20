import React, { Component } from "react";

class UserCard extends Component {
  render() {
    const { id, firstName } = this.props.user;
    return (
      <article key={id}>
        <h3>
          <span>{id}: </span>
          {firstName}
        </h3>
      </article>
    );
  }
}

export default UserCard;
