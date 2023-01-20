import React, { Component } from "react";

class CiaoSorted extends Component {
  render() {
    const { isDirectionById } = this.props;
    return (
      <p>
        <button onClick={this.sortUsersById}>
          sort by id {isDirectionById ? "right" : "revert"}
        </button>
      </p>
    );
  }
}

export default CiaoSorted;
