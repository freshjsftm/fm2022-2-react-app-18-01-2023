import React, { useReducer } from "react";
import { Formik, Form, Field } from "formik";
import reducer from "./reducer";
import { TASK_SCHEMA } from "../../utils/validationSchemas";
import { MODE } from "../TodoUseState/modeConstants";
import Task from "../Task";

const TodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [{ id: Date.now(), body: "test", isDone: false }],
    mode: MODE.ALL,
  });
  const onSubmit = (values, formikBag) => {
    dispatch({ type: "ADD_TASKS", payload: values.body });
    formikBag.resetForm();
  };
  const handlerDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  const handlerIsDone = (id) => {
    dispatch({ type: "IS_DONE_TASK", payload: id });
  };
  const mapTasks = (task) => {
    if (state.mode === MODE.DONE && task.isDone) {
      return (
        <Task
          key={task.id}
          task={task}
          deleteTask={handlerDelete}
          isDoneTask={handlerIsDone}
        />
      );
    }else if(state.mode===MODE.DO && task.isDone===false){
      return (
        <Task
          key={task.id}
          task={task}
          deleteTask={handlerDelete}
          isDoneTask={handlerIsDone}
        />
      );
    }else if(state.mode===MODE.ALL){
      return (
        <Task
          key={task.id}
          task={task}
          deleteTask={handlerDelete}
          isDoneTask={handlerIsDone}
        />
      );
    }
  };
  const handleMode = ({ target: { value } }) => {
    dispatch({ type: "SET_MODE", payload: value });
  };
  return (
    <div>
      <section>
        <h3>new task</h3>
        <Formik
          onSubmit={onSubmit}
          initialValues={{ body: "" }}
          validationSchema={TASK_SCHEMA}
        >
          <Form>
            <Field name="body" />
            <input type="submit" value="Add" />
          </Form>
        </Formik>
        <select value={state.mode} onChange={handleMode}>
          <option value={MODE.ALL}>{MODE.ALL}</option>
          <option value={MODE.DO}>{MODE.DO}</option>
          <option value={MODE.DONE}>{MODE.DONE}</option>
        </select>
      </section>
      <section>
        <h3>tasks</h3>
        {state.tasks.map(mapTasks)}
      </section>
    </div>
  );
};

export default TodoReducer;
