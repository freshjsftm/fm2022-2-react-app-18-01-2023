import { Component } from "react";

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = {isHi:true}
  }
  handlerBtn = ()=>{
    this.setState({isHi: !this.state.isHi})
  }
  render() {
    const { username, photo} = this.props;
    const {isHi} = this.state;
    const ciaoWord = isHi ? 'Hi' : 'Bye';
    return (
      <h2>
        {ciaoWord}, {username}! 
        <img src={photo} alt={username} />
        <button onClick={this.handlerBtn}>say {isHi ? 'bye' : 'hi'}</button>
      </h2>
    );
  }
}

export default Ciao;
