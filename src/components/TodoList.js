import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../slices/todoSlice.js";

const TodoList = () => {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newTodo = { id: Date.now(), task };
    dispatch(addTodo(newTodo));
    setTask("");
  };

  return (
    <div style={{padding:"10px"}}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        style={{width:"50%"}}
      />
      <button onClick={handleAdd} style={{marginLeft:"1%"}}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => dispatch(deleteTodo(todo.id))} style={{marginLeft:"1%"}}>Delete</button>
            <button
            style={{marginLeft:"1%"}}
              onClick={() =>
                dispatch(updateTodo({ ...todo, task: `${todo.task} (Updated)` }))
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
