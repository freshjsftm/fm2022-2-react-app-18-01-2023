import { Component } from "react";
import PropTypes from 'prop-types';
import styles from "./Ciao.module.css";

class Ciao extends Component {
  /**
   *
   * @param {*} props
   * @param {string} props.username
   */
  constructor(props) {
    super(props);
    this.state = { isHi: true };
  }
  handlerBtn = () => {
    this.setState({ isHi: !this.state.isHi });
  };
  render() {
    const { username } = this.props;
    const { isHi } = this.state;
    const ciaoWord = isHi ? "Hi" : "Bye";
    // if (typeof username !== "string") {
    //   console.error("type must be string");
    // }
    return (
      <article className={styles.container}>
        <h2>
          {ciaoWord}, {username}!
          <button onClick={this.handlerBtn}>say {isHi ? "bye" : "hi"}</button>
        </h2>
      </article>
    );
  }
}

Ciao.propTypes = {
  username: PropTypes.string.isRequired,
}

export default Ciao;
