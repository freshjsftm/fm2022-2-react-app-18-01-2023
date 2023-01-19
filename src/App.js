import { Component } from "react";
import "./App.css";
import Ciao from "./components/Ciao";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 3,
          firstName: "Brad",
          lastName: "Pitt",
        },
        {
          id: 4,
          firstName: "Tom",
          lastName: "Rot",
        },
        {
          id: 1,
          firstName: "Jim",
          lastName: "Carry",
        },
        {
          id: 2,
          firstName: "Rob",
          lastName: "Qwerty",
        },
        {
          id: 5,
          firstName: "Leo",
          lastName: "Kaprio",
        },
      ],
      isDirectionById: true,
    };
  }
  //додати новий стан для напрямку сортування по імені
  //додати функцію сортування по імені
  //додати кнопку, яка буде викликати сортування
  sortUsersById = () => {
    const { users, isDirectionById } = this.state;
    const usersCopy = [...users];
    usersCopy.sort((curr, next) => {
      return isDirectionById ? curr.id - next.id : next.id - curr.id;
    });
    this.setState({ users: usersCopy, isDirectionById: !isDirectionById });
  };
  render() {
    const { users, isDirectionById } = this.state;
    const liArray = users.map(({ firstName, lastName, id }, index) => (
      <li key={id}>
        <Ciao username={`${id}: ${firstName} ${lastName}`} />
      </li>
    ));
    return (
      <>
        <p>
          <button onClick={this.sortUsersById}>
            sort by id {isDirectionById ? "right" : "revert"}
          </button>
        </p>
        <ul>{liArray}</ul>
      </>
    );
  }
}

export default App;

// users.map((user)=>component)
