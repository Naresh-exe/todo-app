import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/employees" element={<EmployeeList />} />
    </Routes>
  );
};

export default App;
