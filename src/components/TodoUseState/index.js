import React from "react";
import { Formik, Form, Field } from "formik";
import { useTodo } from "../../hooks";
import { TASK_SCHEMA } from "../../utils/validationSchemas";

const TodoUseState = () => {
  const { tasks, addTask, deleteTask, isDoneTask } = useTodo();
  const onSubmit = (values, formikBag) => {
    addTask(values.body);
    formikBag.resetForm();
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
      </section>
      <section>
        {tasks.map((task) => (
          <article key={task.id}>
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
        ))}
      </section>
    </div>
  );
};

export default TodoUseState;
