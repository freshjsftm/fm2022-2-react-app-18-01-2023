import { Component } from "react";
//import "./style.css";
import styles from './Ciao.module.css';

class Ciao extends Component {
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
    console.log(styles)
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

export default Ciao;
