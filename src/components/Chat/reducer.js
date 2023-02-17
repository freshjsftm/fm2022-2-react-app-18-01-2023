import TYPE_ACTIONS from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_ACTIONS.DATA_RESPONSE_SUCCESS: {
      const {
        data: { users, messages },
      } = action;
      const usersMap = new Map();
      users.forEach((user) => usersMap.set(user.id, user));
      const messagesWithAuthor = messages.map((msg) => ({
        ...msg,
        author: usersMap.get(msg.authorId),
      }));
      const newState = {
        ...state,
        users,
        messages: messagesWithAuthor,
      };
      return newState;
    }
    case TYPE_ACTIONS.DATA_RESPONSE_ERROR: {
      const { error } = action;
      const newState = {
        ...state,
        error,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;