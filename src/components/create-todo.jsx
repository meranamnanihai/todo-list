import React from 'react';
import { useState } from 'react';
import "./create-todo.css"
function TodoBox({setrefresh,inputvalue,setinputvalue}) {
 
  function handleChange(e) {
    setinputvalue(e.target.value);
  }
  return (
    <div className="todo-box border border-black">
      <input type="text" placeholder="Enter todo" className="todo-input" value={inputvalue} onChange={handleChange} />
      <button className="add-button" onClick={()=>{localStorage.setItem(inputvalue,"not-done"); setrefresh(inputvalue); setinputvalue(""); document.getElementsByClassName("add-button")[0].innerText = "Add";}}>Add</button>
    </div>
  );
}

export default TodoBox;
