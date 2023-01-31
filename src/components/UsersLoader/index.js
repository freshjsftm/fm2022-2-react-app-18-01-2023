import React, { Component } from "react";
import PropTypes from "prop-types";
import { getUsers } from "./../../api";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [], //fulfilled(data)
      error: null, //reject(error)
      isPending: true, //pending
      currentPage: 1,
    };
  }

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState((state, props) => ({ currentPage: state.currentPage - 1 }));
    }
  };
  nextPage = () =>
    this.setState((state, props) => ({ currentPage: state.currentPage + 1 }));

  load = () => {
    const { currentPage:page } = this.state;
    getUsers({page})
      .then((data) =>
        this.setState({
          users: data.results,
        })
      )
      .catch((error) =>
        this.setState({
          error,
        })
      )
      .finally(() =>
        this.setState({
          isPending: false,
        })
      );
  };

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }

  render() {
    const { users, error, isPending, currentPage } = this.state;
    if (isPending) {
      return <div>loading...</div>;
    }
    if (error) {
      return <div>ERROR!!!</div>;
    }
    return (
      <section>
        <div>
          <button onClick={this.prevPage}>&#9664; prev</button>
          <strong> {currentPage} </strong>
          <button onClick={this.nextPage}>next &#9654;</button>
        </div>
        <h2>Users: </h2>
        {users.map((user) => (
          <article key={user.login.uuid}>
            <h3>
              {user.name.first} {user.name.last}
            </h3>
          </article>
        ))}
      </section>
    );
  }
}

UsersLoader.propTypes = {};
export default UsersLoader;
