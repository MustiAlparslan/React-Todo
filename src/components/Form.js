import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTodo } from '../stores/todoSlice'

function Form() {
  const todo = useSelector((state) => state.todo.todo)
  const dispatch = useDispatch()
  return (
    <div>
        <form>
          <input
            className="max-w-[50%] w-full outline-0 border-b border-black  px-[5px] bg-transparent"
            type="text"
            value={todo}
            placeholder="Add a todo..."
            onChange={(e) => dispatch(setTodo(e.target.value))}
            maxLength="120"
          />
        </form>
    </div>
  )
}

export default Form