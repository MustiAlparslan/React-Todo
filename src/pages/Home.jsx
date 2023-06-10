import React from "react";
import Form from "../components/Form";
import TodoItem from "../components/todo/TodoItem";
import { useTodo } from "../hooks/useTodo";

function Home() {
  const [todo, setTodo] = React.useState("");
  const [addTodo, list, setList] = useTodo({ todo, setTodo });

  const RenderTodos = ({ data }) => {
    return (
      <ul className="max-w-lg	w-full  m-auto">
        {data.length !== 0 ? (
          data?.map((item, index) => (
            <TodoItem setList={setList} list={list} item={item} index={index} />
          ))
        ) : (
          <div className="text-red-500 font-medium">
            To do has not been added yet!
          </div>
        )}
      </ul>
    );
  };

  return (
    <div className="container max-w-screen-md  my-5 m-auto text-center">
      <Form todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <RenderTodos data={list} />
    </div>
  );
}

export default Home;
