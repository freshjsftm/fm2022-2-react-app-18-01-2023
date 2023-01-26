import React from "react";
import { PropTypes } from "prop-types";
import UserCard, { userPropTypeShape, userDefault } from "../UserCard";

/**
 *
 * @param {*} props
 * @param {array} props.users
 * @param {func} props.setUsersSelected
 * @returns
 */
function UserList(props) {
  const userSelect = (id) => {
    const { users, setUsersSelected } = props;
    const newUsers = users.map((user) => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected,
    }));
    setUsersSelected(newUsers);
  };
  const mapUsers = (user) => (
    <UserCard key={user.id} user={user} userSelect={userSelect} />
  );
  const { users } = props;
  return (
    <section>
      <h2>Users list</h2>
      {users.map(mapUsers)}
    </section>
  );
}
UserList.defaultProps = {
  users: [userDefault],
  setUsersSelected: () => {},
};
UserList.propTypes = {
  users: PropTypes.arrayOf(userPropTypeShape).isRequired,
  setUsersSelected: PropTypes.func,
};
export default UserList;
