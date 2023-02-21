import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useTodo } from "../../hooks";
import { TASK_SCHEMA } from "../../utils/validationSchemas";
import Task from "../Task";
import { MODE } from "./modeConstants";

const TodoUseState = () => {
  //стан для режиму відображення завдань
  const [mode, setMode] = useState(MODE.ALL);
  const { tasks, addTask, deleteTask, isDoneTask } = useTodo();
  const onSubmit = (values, formikBag) => {
    addTask(values.body);
    formikBag.resetForm();
  };
  const handleMode = ({ target: { value } }) => {
    setMode(value);
  };
  const mapTasks = (task) => {
    if (mode === MODE.DONE && task.isDone) {
      return (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          isDoneTask={isDoneTask}
        />
      );
    } else if (mode === MODE.DO && task.isDone === false) {
      return (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          isDoneTask={isDoneTask}
        />
      );
    } else if (mode === MODE.ALL) {
      return (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          isDoneTask={isDoneTask}
        />
      );
    }
  };
  return (
    <div>
      <section>
        <Formik
          onSubmit={onSubmit}
          initialValues={{ body: "" }}
          validationSchema={TASK_SCHEMA}
        >
          <Form>
            <Field name="body" />
            <input type="submit" value="ADD" />
          </Form>
        </Formik>
        {/* селект з режимами відображення завдань */}
        <select value={mode} onChange={handleMode}>
        <option value={MODE.ALL}>{MODE.ALL}</option>
          <option value={MODE.DO}>{MODE.DO}</option>
          <option value={MODE.DONE}>{MODE.DONE}</option>
        </select>
      </section>
      <section>{tasks.map(mapTasks)}</section>
    </div>
  );
};

export default TodoUseState;
