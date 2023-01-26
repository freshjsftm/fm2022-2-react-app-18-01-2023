import React from "react";
import PropTypes from "prop-types";
/**
 *
 * @param {*} props
 * @param {object} props.user
 * @param {func} props.userSelect
 * @returns
 */
function UserCard(props) {
  const btnHandler = () => {
    const {
      user: { id },
      userSelect,
    } = props;
    userSelect(id);
  };
  const {
    user: { id, firstName, isSelected },
  } = props;
  const styles = { backgroundColor: isSelected ? "pink" : undefined };
  return (
    <article key={id} style={styles}>
      <h3>
        {" "}
        <span>{id}: </span> {firstName}{" "}
      </h3>
      <button onClick={btnHandler}>select user</button>
    </article>
  );
}

export const userPropTypeShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
});
export const userDefault = {
  id: null,
  firstName: "noname",
  lastName: "noname",
  isSelected: true,
};

UserCard.propTypes = {
  user: userPropTypeShape.isRequired,
  userSelect: PropTypes.func,
};

UserCard.defaultProps = {
  user: { id: null, firstName: "noname", lastName: "noname", isSelected: true },
  userSelect: () => {},
};
export default UserCard;
