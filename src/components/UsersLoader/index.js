import React, { Component } from "react";
import PropTypes from "prop-types";
import { getUsers } from "./../../api";
import Spinner from "../Spinner";
import Error404 from "../Error404";
import { apiConfig } from "../../configs";

const NATS = ['gb', 'fr', 'us', 'au'];
const AMOUNTS = [3,5,7,10,15,30];

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [], //fulfilled(data)
      error: null, //reject(error)
      isPending: true, //pending
      currentPage: 1,
      currentResults: String(apiConfig.DEFAULT_AMOUNT),
      currentNat: apiConfig.DEFAULT_NAT,
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
    const { currentPage: page, currentResults: results, currentNat :nat } = this.state;
    getUsers({ page, results, nat })
      .then((data) => {
        if (data.error) {
          return this.setState({
            error: data,
          });
        }
        return this.setState({
          users: data.results,
          error: null,
        });
      })
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
    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.currentResults !== this.state.currentResults||
      prevState.currentNat !== this.state.currentNat
    ) {
      this.load();
    }
  }
  // HW!!!! 
  mapUsers = ({ gender, name, nat, login }) => (
    <article key={login.uuid}>
      <h3>
        {name.first} {name.last}
      </h3>
      <p>nat: {nat}</p>
      {/*<p>gender: {gender}</p> */}
    </article>
  );
  resultsHandler = ({ target: { value } }) =>
    this.setState({ currentResults: value });
  natHandler = ({ target: { value } }) => this.setState({ currentNat: value });
  render() {
    const { users, error, isPending, currentPage, currentResults, currentNat } =
      this.state;
    if (isPending) {
      return <Spinner />;
    }
    if (error) {
      console.log(error);
      return <Error404 />;
    }
    return (
      <section>
        <div>
          <button onClick={this.prevPage}>&#9664; prev</button>
          <strong> {currentPage} </strong>
          <button onClick={this.nextPage}>next &#9654;</button>
          <span> ||| </span>
          amount:
          {/*  HW!!!! AMOUNTS.map */}
          <label>
            <input
              onChange={this.resultsHandler}
              name="results"
              type="radio"
              value={3}
              checked={currentResults === "3"}
            />
            3
          </label>
          <label>
            <input
              onChange={this.resultsHandler}
              name="results"
              type="radio"
              value={5}
              checked={currentResults === "5"}
            />
            5
          </label>
          <label>
            <input
              onChange={this.resultsHandler}
              name="results"
              type="radio"
              value={7}
              checked={currentResults === "7"}
            />
            7
          </label>
          <span> ||| </span>
          nationality:
          <select name="nat" onChange={this.natHandler} value={currentNat}>
            {/* HW!!!! NATS.map() */}
            <option value="fr">FR</option>
            <option value="gb">GB</option>
            <option value="us">US</option>
          </select>
        </div>
        <h2>Users: </h2>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

UsersLoader.propTypes = {};
export default UsersLoader;
