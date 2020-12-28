/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import "./App.css";
import Todo_Form from "./components/Todo_Form";
import Todo_List from "./components/Todo_List";

function App() {
  const [inputs, setInputs] = useState([]);

  // acquiring date and time
  let date = String(new window.Date());
  date = date.slice(0, 24);
  // console.log(date);

  //receiving new input
  const addTodo = (values) => {
    //console.log(values);
    const newTodo = {
      id: date, //using date as a unique id for each todos
      title: values,
    };
    setInputs([...inputs, newTodo]);
  };

  const deleteTodo = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  return (
    <div className="toDoApp">
      <Todo_Form addTodo={addTodo} />
      <Todo_List inputs={inputs} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
