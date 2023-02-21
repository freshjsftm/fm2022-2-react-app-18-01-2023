import React from "react";
import PropTypes from "prop-types";

const Task = (props) => {
  const { task, deleteTask, isDoneTask } = props;
  return (
    <article>
      <p>
        <input
          type="checkbox"
          name="isDone"
          checked={task.isDone}
          onChange={() => isDoneTask(task.id)}
        />
        {task.body}
        <button onClick={() => deleteTask(task.id)}>X</button>
      </p>
    </article>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    isDone: PropTypes.bool,
  }),
};

export default Task;
