import React from "react";
const getDataFromLocalStorage = () => {
  if (localStorage.getItem("TODOS")) {
    return JSON.parse(localStorage.getItem("TODOS"));
  } else {
    return [];
  }
};

export const useTodo = ({ todo = "", setTodo = () => {} }) => {
  const [list, setList] = React.useState(getDataFromLocalStorage());

  const addTodo = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      const newTask = {
        id: list && list.length + 1,
        name: todo,
        completed: false,
      };
      setList([...list, newTask]);
      localStorage.setItem("TODOS", JSON.stringify([...list, newTask]));
    }
    setTodo("");
  };

  return [addTodo, list, setList];
};
