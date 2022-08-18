import React, { useState } from "react";

let date = new Date();
const HOURS_FORMAT = `${date.getHours()}:${date.getMinutes()}`;
const DATE_FORMAT = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

const TODO_LIST = [
  {
    id: 0,
    name: "Example...",
    isCompleted: false,
    postDate: "18.08.2022",
    postHours: " 19:00",
  },
];

function Contact() {
  const [list, setList] = useState(TODO_LIST);
  const [todo, setTodo] = useState("");
  let [count, setCount] = useState(1);

  return (
    <div>
      <div className="container max-w-screen-md  my-5 m-auto text-center">
        <form>
          <input
            className="max-w-[50%] w-full outline-0 border-b border-black  px-[5px] bg-transparent"
            type="text"
            value={todo}
            placeholder="Add a todo..."
            onChange={(e) => setTodo(e.target.value)}
            maxLength="290"
          />
        </form>

        {todo.length === 0 ? (
          <></>
        ) : (
          <button
            className="hover:bg-transparent font-[600] hover:text-sky-500 hover:border-sky-500 	 border   max-w-[120px] text-lg text-white w-full bg-sky-500 py-1.5 rounded-xl	mt-8"
            onClick={() => {
              setCount(count + 1);
              setList([
                ...list,
                {
                  id: count,
                  name: todo,
                  isCompleted: false,
                  postDate: DATE_FORMAT.toString(),
                  postHours: HOURS_FORMAT.toString(),
                },
              ]);
              setTodo("")
            }}
          >
            Add
          </button>
        )}

        <ul className="max-w-lg	w-full  m-auto">
          {list.map((item, index) => (
            <li
              className="bg-white shadow-xl	py-2 px-4 opacity-95	rounded-[4px]	 shadow-[#818ab5]	  flex flex-col text-left  max-w-lg 	w-full  break-all my-8   px-[8px] min-h-[70px]  flex justify-between"
              onClick={() => {
                setList(
                  list.map((itm) =>
                    itm.id === item.id
                      ? { ...itm, isCompleted: !itm.isCompleted }
                      : itm
                  )
                );
              }}
              key={index}
            >
              {/* {item.id}  */}
              {item.name}
              {/* {item.isCompleted ? <span></span> : <span></span>} */}
              <p className="flex text-right flex-col text-[11px] text-gray-800 italic tracking-wide	text-italic		">
                <span>{item.postHours}</span>
                <span>{item.postDate}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
