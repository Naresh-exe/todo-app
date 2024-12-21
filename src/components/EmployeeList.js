import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../slices/employeesSlice";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.employees);
  const status = useSelector((state) => state.employees.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEmployees());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1>Employee List</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to load employees.</p>}
      {status === "succeeded" && (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>{employee.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
