import React, { Component } from "react";
import PropTypes from "prop-types";
import { getUsers } from "./../../api";
import Spinner from "../Spinner";
import Error404 from "../Error404";

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

  mapUsers = ({gender,name,nat,login}) => (
    <article key={login.uuid}>
      <h3>
        {name.first} {name.last}
      </h3>
      <p>nat: {nat}</p>
      <p>gender: {gender}</p>
    </article>
  )

  render() {
    const { users, error, isPending, currentPage } = this.state;
    if (isPending) {
      return <Spinner />;
    }
    if (error) {
      return <Error404 />;
    }
    return (
      <section>
        <div>
          <button onClick={this.prevPage}>&#9664; prev</button>
          <strong> {currentPage} </strong>
          <button onClick={this.nextPage}>next &#9654;</button>
        </div>
        <h2>Users: </h2>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

UsersLoader.propTypes = {};
export default UsersLoader;
