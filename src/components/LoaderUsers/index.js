import React, { Component } from "react";
import Spinner from '../Spinner';
import Error404 from '../Error404';

class LoaderUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isPending: false,
    };
  }

  componentDidMount() {
    this.setState({ isPending: true });
    fetch("/data/users.json")
      .then((responce) => responce.json())
      .then((data) => this.setState({ users: data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  }

  render() {
    const { users, error, isPending } = this.state;
    if(isPending){return <Spinner />}
    if(error){return <Error404 />}
    return (
      <ol>
        {users.map((user) => <li key={user.id}> {user.name}</li>)}
      </ol>
    );
  }
}

export default LoaderUsers;
