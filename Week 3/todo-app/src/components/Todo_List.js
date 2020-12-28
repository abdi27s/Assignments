/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Todo_main from "./Todo_main";

const Todo_List = ({ inputs, deleteTodo }) => {
  return (
    <div>
      {inputs.map((input) => (
        <Todo_main
          key={input.id}
          title={input.title}
          id={input.id}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default Todo_List;
