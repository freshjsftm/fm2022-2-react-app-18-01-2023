import React, { useReducer, useEffect } from "react";
import { loadChat } from "../../api";
import TYPE_ACTIONS from "./constants";
import reducer from "./reducer";

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
    error: null,
    isPending: false,
  });
  useEffect(() => {
    loadChat()
      .then((data) =>
        dispatch({ data, type: TYPE_ACTIONS.DATA_RESPONSE_SUCCESS })
      )
      .catch((error) =>
        dispatch({ error, type: TYPE_ACTIONS.DATA_RESPONSE_ERROR })
      );
  }, []);
  if (state.error) {
    return <div>404</div>;
  }
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
