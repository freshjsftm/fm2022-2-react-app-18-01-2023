import React from "react";
import { PropTypes } from "prop-types";
import { userPropTypeShape, userDefault } from "../UserCard";
function SelectedUserList(props) {
  const mapSelectUsers = ({ id, firstName }) => <li key={id}>{firstName}</li>;

  const { users } = props;
  const selectUsers = users.filter((user) => user.isSelected);
  return (
    <header>
      <ul>{selectUsers.map(mapSelectUsers)}</ul>
    </header>
  );
}
SelectedUserList.defaultProps = {
  users: [userDefault],
};
SelectedUserList.propTypes = {
  users: PropTypes.arrayOf(userPropTypeShape).isRequired,
};

export default SelectedUserList;
