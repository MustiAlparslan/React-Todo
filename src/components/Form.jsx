import React from "react";

function Form({ setTodo, todo, addTodo }) {
  return (
    <form onSubmit={addTodo}>
      <input
        className="max-w-[50%] w-full outline-0 border-b border-black  px-[5px] bg-transparent"
        type="text"
        value={todo}
        placeholder="Add a todo..."
        onChange={(e) => setTodo(e.target.value)}
        maxLength="120"
      />
      <button
        type="submit"
        className="hover:bg-transparent font-[600] hover:text-sky-500 hover:border-sky-500 	 border   max-w-[120px] text-lg text-white w-full bg-sky-500 py-1.5 rounded-xl	mt-8"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
