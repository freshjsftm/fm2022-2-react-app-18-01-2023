import React, { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  const {type,data: { messages, users }} = action;
  switch (type) {
    case "DATA_RESPONSE_SUCCESS": {
      const usersMap = new Map();
      // ключ - ідентифікатор юзера
      // значення - копія адреси юзера
      users.forEach((user) => usersMap.set(user.id, user));
      //console.log(usersMap)
      const messagesWithAuthor = messages.map((msg)=>{
        const msgWithAuthor = {
          ...msg,
          author: usersMap.get(msg.authorId) //копія адреси юзера
        }
        //console.log(msgWithAuthor)
        return msgWithAuthor;
      })
      const newState = {
        ...state,
        users,
        messages:messagesWithAuthor
      };
      return newState;
    }
    default:
      return state;
  }
};

const loadChat = () =>
  fetch("/data/chat.json").then((response) => response.json());

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, { messages: [], users: [] });
  useEffect(() => {
    loadChat().then((data) => {
      const action = { data, type: "DATA_RESPONSE_SUCCESS" };
      return dispatch(action);
    });
  }, []);
  return (
    <section>
      <h2>Chat</h2>
      {state.messages.map((msg) => (
        <article key={msg.id}>
          <h3>{msg.body}</h3>
          <p>{msg.author.name}</p>
        </article>
      ))}
    </section>
  );
};

export default Chat;



