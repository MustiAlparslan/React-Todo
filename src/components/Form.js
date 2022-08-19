import React from 'react'

function Form({setTodo, todo}) {
  return (
    <div>
        <form>
          <input
            className="max-w-[50%] w-full outline-0 border-b border-black  px-[5px] bg-transparent"
            type="text"
            value={todo}
            placeholder="Add a todo..."
            onChange={(e) => setTodo(e.target.value)}
            maxLength="120"
          />
        </form>
    </div>
  )
}

export default Form