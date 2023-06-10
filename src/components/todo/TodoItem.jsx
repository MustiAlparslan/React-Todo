import { TiTick } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ item, index, list, setList }) => {
  const toggleComplete = (id) => {
    const updatedTodos = list.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setList(updatedTodos);
    localStorage.setItem("TODOS", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = list.filter((todo) => todo.id !== id);
    setList(updatedTodos);
    localStorage.setItem("TODOS", JSON.stringify(updatedTodos));
  };
  return (
    <li
      className="bg-white shadow-xl	py-2 px-4 opacity-95 rounded-[4px]	 shadow-[#818ab5]	   flex-col text-left  max-w-lg 	w-full  break-all my-8   min-h-[70px]  flex justify-between"
      key={index}
    >
      <h1 className="font-bold">TODO</h1>
      <span className="italic">{item.name}</span>

      <div className="flex  justify-between mt-[15px] border-t text-[11px] text-gray-800 italic tracking-wide	text-italic">
        <div className="flex mt-[4px]" onClick={() => toggleComplete(item?.id)}>
          {item.completed ? (
            <TiTick size={22} style={{ color: "green" }} />
          ) : (
            <AiOutlineClose size={22} style={{ color: "red" }} />
          )}
        </div>

        <div className="text-[14px] hover:cursor-pointer mt-[4px] px-[4px] ">
          <MdDelete
            size={22}
            style={{ color: "#0ea5e9" }}
            onClick={() => deleteTodo(item?.id)}
          />
        </div>
      </div>
    </li>
  );
};
export default TodoItem;
