import React, { useState } from "react";
import Form from "../components/Form";
import { useSelector, useDispatch } from 'react-redux'
import { setTodos, setTodo ,setList } from '../stores/todoSlice'

function Home() {
  // const [todo, setTodo] = useState("");
  // const [list, setList] = useState([]);
  let [count, setCount] = useState(1);
  let getList = localStorage.getItem("todos");
  let parseList = JSON.parse(getList);

  const todo = useSelector((state) => state.todo.todo)
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  const addLocalStorage = (e) => {
    if (todo) {
      setCount(count + 1);
      const newTask = { id: count, name: todo, status: false};
      dispatch(setList([...todos, newTask]));
      localStorage.setItem("todos", JSON.stringify([...todos, newTask]));
    } else {
      console.log("YOK");
    }
    // setTodo("");
  };
 

  return (
    <div>
      <div className="container max-w-screen-md  my-5 m-auto text-center">
        <Form/>
        {todo.length === 0 ? (
          <></>
        ) : (
          <button
            className="hover:bg-transparent font-[600] hover:text-sky-500 hover:border-sky-500 	 border   max-w-[120px] text-lg text-white w-full bg-sky-500 py-1.5 rounded-xl	mt-8"
            onClick={addLocalStorage}
          >
            Add
          </button>
        )}

        <ul className="max-w-lg	w-full  m-auto">
          {parseList.map((item, index) => (
            <li
              className="bg-white shadow-xl	py-2 px-4 opacity-95 rounded-[4px]	 shadow-[#818ab5]	  flex flex-col text-left  max-w-lg 	w-full  break-all my-8   px-[8px] min-h-[70px]  flex justify-between"
              key={index}>
              <h1 className="font-bold">TODO</h1>
             <span className="italic">{item.name}</span>

              <div className="flex  justify-between mt-[15px] border-t text-[11px] text-gray-800 italic tracking-wide	text-italic">
                <div className="flex mt-[4px]"
                 onClick={() => {
                  let status = todos.map((itm) =>
                    itm.id === item.id ? { ...itm, status: !itm.status } : itm
                  );
                  dispatch(setTodos((status)));
                  localStorage.setItem("todos", JSON.stringify(status));
                }}
                >
                  {item.status ? (
                    <span className="bg-green-300 hover:cursor-pointer  rounded-[50px] w-[8px]  h-[8px] p-2.5"></span>
                  ) : (
                    <span className="bg-red-300  hover:cursor-pointer rounded-[50px] w-[8px] h-[8px] p-2.5"></span>
                  )}
                </div>
                
                <div 
                  className="text-[14px] hover:cursor-pointer mt-[4px] px-[4px] ">
                  Edit
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
