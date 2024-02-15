import React from 'react';
import Todo from './todo';
import { useState } from 'react';
let uniquekey = 1;
function TodoList({ items ,setinputvalue}) {
  const [showtodo, setshowtodo] = useState(false)
  function handlechange(e) {
    setshowtodo(e.target.checked)
  }
  return (
    <div className="flex justify-center  min-h-screen">
      <div className="max-w-lg w-[90%] bg-white rounded-lg shadow-lg p-8 px-2 lg:px-8 border border-black h-fit">
        <div className="text-center text-3xl font-bold text-gray-800 mb-8">Todo List</div>
        <div className="space-y-4">
        <div className="flex items-center justify-center">
            <input
              type="checkbox"
              id="showTodosCheckbox"
              className=" h-6 w-6 rounded border border-gray-300 checked:bg-transparent checked:border-transparent  "
              checked={showtodo}
              onChange={handlechange}
            />
            <label
              htmlFor="showTodosCheckbox"
              className="ml-2 text-gray-800 cursor-pointer select-none"
            >
              Show already done todos
            </label>
          </div>
          {
            items.map((item) => {
              uniquekey += 1;
              return <Todo text={item} key={uniquekey} show={showtodo} todoitems = {items} setinputvalue = {setinputvalue}></Todo>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default TodoList;
