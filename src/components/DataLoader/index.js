import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import Error404 from "../Error404";

class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      isPending: false,
    };
  }

  load = () => {
    const { loadData } = this.props;
    this.setState({ isPending: true });
    loadData()
      .then((data) => this.setState({ data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };
  componentDidMount() {
    this.load();
  }

  render() {
    const { render } = this.props;
    const { error, isPending } = this.state;
    if(isPending){return <Spinner />}
    if(error){return <Error404 />}
    return render(this.state);
  }
}

DataLoader.propTypes = {
  loadData: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

export default DataLoader;
